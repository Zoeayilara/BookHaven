import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import book1 from "@assets/generated_images/Premium_book_cover_burgundy_7b786278.png";
import book2 from "@assets/generated_images/Modern_book_cover_navy_703d70ba.png";
import book3 from "@assets/generated_images/Vintage_book_cover_green_7288a64d.png";
import book4 from "@assets/generated_images/Contemporary_book_cover_gray_1d544b82.png";

const books = [
  {
    id: 1,
    title: "Echoes of Eternity",
    subtitle: "A Journey Through Time",
    genre: "Historical Fiction",
    image: book1,
    description: "An epic tale spanning centuries, exploring love and loss across generations.",
  },
  {
    id: 2,
    title: "Shadows and Light",
    subtitle: "Contemporary Drama",
    genre: "Fiction",
    image: book2,
    description: "A gripping exploration of family secrets and redemption in modern times.",
  },
  {
    id: 3,
    title: "The Garden of Whispers",
    subtitle: "Mystery & Romance",
    genre: "Romance",
    image: book3,
    description: "Where mystery meets romance in a forgotten English garden.",
  },
  {
    id: 4,
    title: "Breaking Dawn",
    subtitle: "A New Beginning",
    genre: "Fiction",
    image: book4,
    description: "A powerful story of resilience and hope against all odds.",
  },
];

export default function Books() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const genres = ["All", "Fiction", "Historical Fiction", "Romance"];

  const filteredBooks =
    selectedGenre === "All"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  return (
    <section id="books" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-books-title">
            Published Works
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12" data-testid="text-books-subtitle">
            Explore a collection of stories that have touched hearts and minds across the world.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                onClick={() => setSelectedGenre(genre)}
                data-testid={`button-filter-${genre.toLowerCase().replace(" ", "-")}`}
              >
                {genre}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredBooks.map((book, index) => {
              const { ref: bookRef, inView: bookInView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <div
                  key={book.id}
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
                        onClick={() => console.log(`Learn more about: ${book.title}`)}
                        data-testid={`button-learn-more-${book.id}`}
                      >
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
