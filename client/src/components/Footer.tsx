import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiGoodreads, SiInstagram } from "react-icons/si";
import { Twitter } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-newsletter-title">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-4" data-testid="text-newsletter-description">
              Subscribe to my newsletter for updates on new releases, exclusive content, and
              writing insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button type="submit" data-testid="button-newsletter-submit">
                Subscribe
              </Button>
            </form>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-connect-title">
              Connect
            </h3>
            <p className="text-muted-foreground mb-4" data-testid="text-connect-description">
              Follow along on social media for behind-the-scenes content and literary
              discussions.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Instagram clicked")}
                data-testid="button-social-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Twitter clicked")}
                data-testid="button-social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Goodreads clicked")}
                data-testid="button-social-goodreads"
              >
                <SiGoodreads className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 Author Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => console.log("Privacy clicked")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => console.log("Terms clicked")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </button>
            <button
              onClick={() => console.log("Contact clicked")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
