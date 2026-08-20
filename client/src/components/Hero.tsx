import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ResponsiveImage from "@/lib/responsiveImage";
import heroImage from "@assets/generated_images/Cozy_reading_scene_hero.jpg";

export default function Hero() {
  const scrollToBooks = () => {
    const element = document.getElementById("books");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* The LCP image: a real <img> rather than a CSS background so the
            preload scanner can start it immediately and pick a phone-sized
            AVIF/WebP instead of the full-width JPEG. */}
        <ResponsiveImage
          base="Cozy_reading_scene_hero"
          fallback={heroImage}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* Above the fold, so it renders on first paint rather than waiting for
          an IntersectionObserver callback after hydration. */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6" data-testid="text-hero-title">
            Breaking Free From{" "}
            <span className="text-primary">Spiritual Bondage</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-subtitle">
            Discover transformative biblical teachings that unlock spiritual freedom and divine understanding—books that illuminate God's truth and empower believers to overcome life's battles and walk in victory.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={scrollToBooks}
              data-testid="button-explore-books"
            >
              Explore Books
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="backdrop-blur-sm bg-background/10"
              data-testid="button-about-author"
            >
              About the Author
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-all animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
