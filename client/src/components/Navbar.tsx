import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-serif text-xl md:text-2xl font-bold text-foreground hover-elevate rounded-md px-2 -ml-2"
            data-testid="button-brand"
          >
            Francis Egbogun Book Store
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("books")}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-books"
            >
              Books
            </button>
            <button
              onClick={() => scrollToSection("media")}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-media"
            >
              Media
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-reviews"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => window.open("https://www.amazon.com/stores/Francis-Egbogun/author/B096XCCGLT?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true", "_blank")}
              data-testid="button-cta"
            >
              Get the Book
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("books")}
                className="block w-full text-left text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-link-books"
              >
                Books
              </button>
              <button
                onClick={() => scrollToSection("media")}
                className="block w-full text-left text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-link-media"
              >
                Media
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="block w-full text-left text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-link-reviews"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-link-contact"
              >
                Contact
              </button>
              <Button
                onClick={() => window.open("https://www.amazon.com/stores/Francis-Egbogun/author/B096XCCGLT?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true", "_blank")}
                className="w-full"
                data-testid="mobile-button-cta"
              >
                Get the Book
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
