import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import Media from "@/components/Media";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Books />
      <Media />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
