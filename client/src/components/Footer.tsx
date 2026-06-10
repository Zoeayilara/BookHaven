import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiInstagram, SiFacebook } from "react-icons/si";
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
              Subscribe to my YouTube channel for sermons, teachings, and spiritual insights.
            </p>
            <Button 
              onClick={() => window.open("https://youtube.com/@mhmchurch?si=u-OuAyVil6Pvnezx", "_blank")}
              className="w-full"
              data-testid="button-newsletter-submit"
            >
              Subscribe on YouTube
            </Button>
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
                onClick={() => window.open("https://www.instagram.com/francisegbogun/", "_blank")}
                data-testid="button-social-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://x.com/RevFEMinistries?t=-Ob6xfC4etxQqIR3aqgS_w&s=09", "_blank")}
                data-testid="button-social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://www.facebook.com/RevFrancisEgbogun/", "_blank")}
                data-testid="button-social-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 Francis Egbogun. All rights reserved.
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
