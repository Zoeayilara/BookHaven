import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import authorImage from "@assets/generated_images/Author_professional_portrait_84247b47.png";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-about-title">
            About the Author
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-[3/4] rounded-md overflow-hidden shadow-xl">
                <img
                  src={authorImage}
                  alt="Author portrait"
                  className="w-full h-full object-cover"
                  data-testid="img-author-portrait"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed" data-testid="text-author-bio-1">
                With over two decades of storytelling, I've dedicated my life to exploring
                the intricate tapestry of human emotions and experiences. My works span
                across genres, from historical fiction to contemporary drama, each piece
                crafted with meticulous attention to character and narrative depth.
              </p>

              <div className="relative bg-card border border-card-border rounded-md p-6 my-8">
                <Quote className="w-8 h-8 text-primary absolute -top-4 -left-2" />
                <p className="font-serif text-xl italic text-card-foreground pl-6" data-testid="text-author-quote">
                  "Every story is a journey into the heart of what it means to be human.
                  I write to understand, to connect, and to illuminate."
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed" data-testid="text-author-bio-2">
                My novels have garnered critical acclaim and reached readers across the
                globe. When I'm not writing, I'm teaching creative writing workshops and
                mentoring emerging authors in their literary journeys.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-muted rounded-md px-4 py-2">
                  <p className="text-sm text-muted-foreground">Published Works</p>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-stat-books">12+</p>
                </div>
                <div className="bg-muted rounded-md px-4 py-2">
                  <p className="text-sm text-muted-foreground">Literary Awards</p>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-stat-awards">8</p>
                </div>
                <div className="bg-muted rounded-md px-4 py-2">
                  <p className="text-sm text-muted-foreground">Countries</p>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-stat-countries">25+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
