import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "This book opened my eyes to the prophetic realm. The teachings on dream interpretation have transformed my spiritual life and helped me understand God's messages.",
    author: "Pastor David Okonkwo",
    book: "What Is Prophecy",
    rating: 5,
  },
  {
    id: 2,
    text: "A powerful guide for every believer facing life's challenges. The biblical strategies in this book helped me overcome battles I thought were impossible to win.",
    author: "Sister Grace Adeyemi",
    book: "Overcoming The Battles Of Life",
    rating: 5,
  },
  {
    id: 3,
    text: "Eye-opening revelation about spiritual kingdoms! This book equipped me with knowledge to identify and contend with dark forces. A must-read for spiritual warfare.",
    author: "Evangelist Michael Eze",
    book: "Identifying The Kingdoms That Be",
    rating: 5,
  },
];

export default function Reviews() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="reviews" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-reviews-title">
            Reader Reviews
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review, index) => {
              const { ref: reviewRef, inView: reviewInView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <div
                  key={review.id}
                  ref={reviewRef}
                  className={`transition-all duration-700 ${
                    reviewInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="p-6 h-full flex flex-col" data-testid={`card-review-${review.id}`}>
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                          data-testid={`icon-star-${review.id}-${i}`}
                        />
                      ))}
                    </div>
                    <p className="text-card-foreground italic mb-4 flex-grow" data-testid={`text-review-${review.id}`}>
                      "{review.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-card-foreground" data-testid={`text-reviewer-${review.id}`}>
                        {review.author}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-review-book-${review.id}`}>
                        {review.book}
                      </p>
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
