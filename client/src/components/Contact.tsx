import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS credentials
    const SERVICE_ID = "service_gk1ucp9";
    const TEMPLATE_ID = "template_dhdq21k";
    const PUBLIC_KEY = "EI8pFqGa0aEsqtGQG";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Francis Egbogun",
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" data-testid="text-contact-title">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
              Have questions or want to discuss my work? I'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                data-testid="input-name"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-email"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                data-testid="input-message"
              />
            </div>
            
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full" 
              data-testid="button-send"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
