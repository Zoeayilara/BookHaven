#!/usr/bin/env python3
"""Generate responsive AVIF/WebP variants for the site's photographic assets.

The originals in attached_assets/ stay the source of truth and remain the
<img> fallback; this writes smaller, modern-format siblings into
attached_assets/optimized/ which BookCard/Hero offer via <picture>.

Re-run after adding or replacing a cover:  python scripts/optimize_images.py
"""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "attached_assets")
OUT = os.path.join(SRC, "optimized")

# (relative path under attached_assets, widths to emit)
TARGETS = [
    ("BOOK1.jpg", (400, 800)),
    ("OVERCOMING_BATTLES.jpg", (400, 800)),
    ("KingdomsCover.jpg", (400, 800)),
    ("ProsperityCover.jpg", (400, 800)),
    ("BOOK3.jpg", (400, 800)),
    ("BOOK5.jpg", (400, 800)),
    ("BACK_COVER1.jpg", (400, 800)),
    ("IMG-20210516-WA0002.jpg", (400, 800)),
    ("IMG-20210516-WA0000.jpg", (400, 800)),
    ("REV_FRANCIS_BOOK1.jpg", (400, 800)),
    ("QUEST_KNOWLEDGE.jpg", (400, 800)),
    ("EBGOGUN4857.jpg", (400, 800)),
    ("generated_images/Cozy_reading_scene_hero.jpg", (640, 1024, 1408)),
]

QUALITY = {"webp": 76, "avif": 55}


def main():
    os.makedirs(OUT, exist_ok=True)
    total_src = total_new = 0
    for rel, widths in TARGETS:
        src_path = os.path.join(SRC, rel)
        if not os.path.exists(src_path):
            print("  MISSING, skipped:", rel)
            continue
        base = os.path.splitext(os.path.basename(rel))[0]
        im = Image.open(src_path)
        im = im.convert("RGB")
        total_src += os.path.getsize(src_path)
        for w in widths:
            if w > im.width:
                continue
            h = round(im.height * w / im.width)
            resized = im.resize((w, h), Image.LANCZOS)
            for fmt in ("webp", "avif"):
                dest = os.path.join(OUT, f"{base}-{w}.{fmt}")
                resized.save(dest, fmt.upper(), quality=QUALITY[fmt])
                total_new += os.path.getsize(dest)
                print(f"  {base}-{w}.{fmt:<4} {os.path.getsize(dest)//1024:>4} KB")
    print(f"\noriginals: {total_src//1024} KB   variants written: {total_new//1024} KB")


if __name__ == "__main__":
    main()
