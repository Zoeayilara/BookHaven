import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Cozy_reading_scene_hero_6b21ad8b.png";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6" data-testid="text-hero-title">
            Stories That{" "}
            <span className="text-primary">Transcend Time</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-subtitle">
            Immerse yourself in captivating narratives that explore the depths of human
            experience. Award-winning author crafting tales that resonate across
            generations.
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-all animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
