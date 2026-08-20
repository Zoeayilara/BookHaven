/**
 * Serves the AVIF/WebP variants produced by scripts/optimize_images.py.
 *
 * Every generated file is pulled in eagerly so Vite fingerprints and emits it;
 * the map is keyed "<base>-<width>.<ext>" (e.g. "QUEST_KNOWLEDGE-800.avif").
 * The original JPEG stays the <img> fallback, so a browser without AVIF/WebP
 * support — or a cover that has no variants yet — still renders.
 */
const variantUrls = import.meta.glob("@assets/optimized/*.{avif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type Format = "avif" | "webp";

const byBase = new Map<string, Record<Format, { width: number; url: string }[]>>();

for (const [path, url] of Object.entries(variantUrls)) {
  const match = /([^/]+)-(\d+)\.(avif|webp)$/.exec(path);
  if (!match) continue;
  const [, base, width, ext] = match;
  const entry = byBase.get(base) ?? { avif: [], webp: [] };
  entry[ext as Format].push({ width: Number(width), url });
  byBase.set(base, entry);
}

const byWidth = (a: { width: number }, b: { width: number }) => a.width - b.width;
byBase.forEach((entry) => {
  entry.avif.sort(byWidth);
  entry.webp.sort(byWidth);
});

const srcSet = (list: { width: number; url: string }[]) =>
  list.map((v) => `${v.url} ${v.width}w`).join(", ");

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Filename stem of the original, e.g. "QUEST_KNOWLEDGE". */
  base: string;
  /** The imported original, used as the fallback <img src>. */
  fallback: string;
  /** Slot width hint so the browser can pick the smallest file that fits. */
  sizes: string;
}

export default function ResponsiveImage({
  base,
  fallback,
  sizes,
  ...imgProps
}: ResponsiveImageProps) {
  const entry = byBase.get(base);

  if (!entry || (!entry.avif.length && !entry.webp.length)) {
    return <img src={fallback} {...imgProps} />;
  }

  // display:contents keeps <picture> out of the box tree, so the wrapped <img>
  // still resolves w-full/h-full against the original parent (e.g. the
  // aspect-[3/4] card frame) exactly as a bare <img> did.
  return (
    <picture className="contents">
      {entry.avif.length > 0 && (
        <source type="image/avif" srcSet={srcSet(entry.avif)} sizes={sizes} />
      )}
      {entry.webp.length > 0 && (
        <source type="image/webp" srcSet={srcSet(entry.webp)} sizes={sizes} />
      )}
      <img src={fallback} sizes={sizes} {...imgProps} />
    </picture>
  );
}
