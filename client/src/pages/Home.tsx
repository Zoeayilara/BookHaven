import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import Footer from "@/components/Footer";

// Everything below the books grid is split into its own chunk: on a phone the
// first screen is parsed and painted without waiting for the media gallery's
// tab UI, the reviews carousel, or the contact form.
const Media = lazy(() => import("@/components/Media"));
const Reviews = lazy(() => import("@/components/Reviews"));
const Contact = lazy(() => import("@/components/Contact"));

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Books />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Media />
        <Reviews />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}
