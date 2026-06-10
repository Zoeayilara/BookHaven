import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BookCardProps {
  book: {
    id: number;
    title: string;
    subtitle: string;
    genre: string;
    image: string;
    description: string;
  };
  index: number;
  onLearnMore: () => void;
}

export default function BookCard({ book, index, onLearnMore }: BookCardProps) {
  const { ref: bookRef, inView: bookInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={bookRef}
      className={`transition-all duration-700 ${
        bookInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-2 h-full" data-testid={`card-book-${book.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={book.image}
            alt={book.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-testid={`img-book-cover-${book.id}`}
          />
        </div>
        <div className="p-6 space-y-3">
          <Badge variant="secondary" data-testid={`badge-genre-${book.id}`}>
            {book.genre}
          </Badge>
          <h3 className="font-serif text-2xl font-semibold text-card-foreground" data-testid={`text-book-title-${book.id}`}>
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid={`text-book-subtitle-${book.id}`}>
            {book.subtitle}
          </p>
          <p className="text-sm text-card-foreground" data-testid={`text-book-description-${book.id}`}>
            {book.description}
          </p>
          <Button
            variant="outline"
            className="w-full mt-4"
            onClick={onLearnMore}
            data-testid={`button-learn-more-${book.id}`}
          >
            Learn More
          </Button>
        </div>
      </Card>
    </div>
  );
}
