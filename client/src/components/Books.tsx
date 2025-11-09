import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import BookCard from "./BookCard";
import book1 from "@assets/BOOK1.jpg";
import book2 from "@assets/OVERCOMING_BATTLES.jpg";
import book3 from "@assets/KingdomsCover.jpg";
import book4 from "@assets/ProsperityCover.jpg";
import book3Alt from "@assets/BOOK3.jpg";
import book5 from "@assets/BOOK5.jpg";
import backCover1 from "@assets/BACK_COVER1.jpg";
import img20210516 from "@assets/IMG-20210516-WA0002.jpg";
import img20210516wa0000 from "@assets/IMG-20210516-WA0000.jpg";
import revFrancisBook from "@assets/REV_FRANCIS_BOOK1.jpg";

const books = [
  {
    id: 1, 
    title: "What Is Prophecy",
    subtitle: "Walking in God's Prophetic Will",
    genre: "Prophecy & Spiritual Growth",
    image: book1,
    description: "A Holy Spirit inspired book that reveals God's will and empowers you to operate in the prophetic realm. Learn about Revelational, Inspirational, and Proclamatory Prophecy.",
    fullDescription: "WHAT IS PROPHECY is a Holy Spirit inspired book that reveals the will of God and helps you to walk in the knowledge of God's will. This book is meant to cause you to receive divine assistance and direction from God that will help you make steady progress in life. Furthermore, it will empower you to operate in the realm of the prophetic just like God, who declares a thing and what He declares becomes a reality. By the same Spirit of faith, you can also do same.",
    topics: [
      "Revelational Prophecy",
      "Inspirational Prophecy",
      "Proclamatory Prophecy",
      "Walking in God's Will",
      "Operating in the Prophetic Realm"
    ],
    publicationYear: "2021",
    isbn: "978-978-789-590-8",
    purchaseLinks: [
      { name: "Amazon", url: "https://a.co/d/6jAKoYM" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 2,
    title: "Overcoming The Battles Of Life",
    subtitle: "Victory Through Faith",
    genre: "Prophecy & Spiritual Growth",
    image: book2,
    description: "Everyone has a battle to fight. Learn how to overcome life's battles through God's grace and fulfill your divine destiny.",
    fullDescription: "Everyone has a battle to fight. There are battles in every sphere of life. Unfortunately, many are not prepared for the battles of life; thus, have become casualties. David fought numerous battles. He was a warrior. Though he was a man after God's heart, he had to fight different kinds of battles, and overcome before he could be established. Apostle Paul was a man of grace, yet he had to fight many battles in order to fulfill his God-given destiny. This book reveals some common battles, such as: Inherited battle, Marital battle, Polygamous battle, Battle against sickness and death, Battle against poverty, Political battle, etc.",
    topics: [
      "Inherited Battle",
      "Marital Battle",
      "Polygamous Battle",
      "Battle Against Sickness and Death",
      "Battle Against Poverty",
      "Political Battle"
    ],
    publicationYear: "2017",
    isbn: "",
    purchaseLinks: [
      { name: "Amazon", url: "https://a.co/d/0BoRUOG" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 3,
    title: "Identifying The Kingdoms That Be",
    subtitle: "Understanding Spiritual Kingdoms",
    genre: "Prophecy & Spiritual Growth",
    image: book3,
    description: "Learn to identify and contend with the dark kingdoms that seek to control and dismantle destinies.",
    fullDescription: "There are various kingdoms in existence that seek to negatively control and contend with the destiny of man. Many destinies have been repackaged by these dark kingdoms. There is need to earnestly contend with these forces of darkness to dislodge and dismantle their works. In the kingdom of darkness there are five major kingdoms: The Ancestral Kingdom, The Graveyard Kingdom, The Witchcraft Kingdom, The Marine Kingdom, and The Occult Kingdom.",
    topics: [
      "The Ancestral Kingdom",
      "The Graveyard Kingdom",
      "The Witchcraft Kingdom",
      "The Marine Kingdom",
      "The Occult Kingdom"
    ],
    publicationYear: "2014",
    isbn: "978-978-942-878-6",
    purchaseLinks: [
      { name: "Amazon", url: "https://a.co/d/auOZ7QY" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 4,
    title: "Children, Heritage of God",
    subtitle: "Godly Parenting and Raising Seeds",
    genre: "Parenting & Dreams",
    image: book3Alt,
    description: "A divine declaration of God's blessing to humanity. A practical guide to illuminate the path of parenting and raising godly seeds according to God's principles.",
    fullDescription: "Children, Heritage of God, stands as a divine declaration of God's blessing to humanity. This profound book serves as a guide to illuminate the path of parenting, provide godly wisdom to the concerns that puzzle both current and aspiring parents, from the nurturing of newborns to the art of child communication, and the raising of godly seeds. Many parents often face roadblocks and a knowledge deficit when it comes to practically raising their children in accordance with God's design. However, the foundation of parenting is encapsulated in Proverbs 22:6: Train up a child in the way he should go and when he is old, he will not depart from it. In the pages of this book, you will find a practical roadmap to help you train your child in a way that aligns with God's principles. This in turn, will lead to securing a destiny fulfilling purpose.",
    topics: [
      "Godly Parenting Principles",
      "Nurturing Newborns",
      "Child Communication",
      "Raising Godly Seeds",
      "Training Children in God's Way",
      "Biblical Parenting Wisdom"
    ],
    publicationYear: "",
    isbn: "978-978-785-592-0",
    purchaseLinks: [
      { name: "Amazon", url: "#" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 5,
    title: "Mysteries of Forgiveness",
    subtitle: "Understanding the Spiritual Mystery",
    genre: "Parenting & Dreams",
    image: book5,
    description: "Discover the spiritual mystery of forgiveness and how understanding it will transform your life and keep God's glory fresh upon you.",
    fullDescription: "Forgiveness is a spiritual mystery. When you grasp the truth of the mystery of forgiveness and you run with it, you will never fail, expire, or be obsolete. In other words, when you understand the mystery of forgiveness, the glory of God will be fresh on you always. You need to understand that you have a responsibility towards every Word of God that you receive. This responsibility is to run with the Word, meditate on the Word, give attention to the Word (let it be a part of your life), and apply the Word always. By so doing, the Word of God produces results in your life.",
    topics: [
      "The Mystery of Forgiveness",
      "Running with God's Word",
      "Meditating on the Word",
      "Applying God's Word",
      "Walking in God's Glory",
      "Spiritual Responsibility"
    ],
    publicationYear: "",
    isbn: "978-978-789-591-3",
    purchaseLinks: [
      { name: "Amazon", url: "https://a.co/d/1i7dwcH" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 6,
    title: "Your Dreams And Your Destiny",
    subtitle: "Understanding Dream Language",
    genre: "Parenting & Dreams",
    image: backCover1,
    description: "Explore the incredible spiritual realm of dreams and understand how God speaks through dreams. Learn to interpret the spiritual meaning of dreams and their impact on your destiny.",
    fullDescription: "This book will expose you the incredible spiritual realm of dreams. It will help you to understand and interpret the spiritual meaning of dreams. The occurrences or happenings in the natural world are often a reflection of what has been revealed through dreams. The spiritual realm controls the natural world. What you could not find manifest in your dreams, the meaning of dreams, portraying dreams, and more about your dream life and destiny through this book.",
    topics: [
      "Understanding Dreams",
      "Dream Interpretation",
      "Spiritual Realm of Dreams",
      "Dream Symbols and Meanings",
      "Dreams and Destiny Connection",
      "Prophetic Dreams"
    ],
    publicationYear: "2017",
    isbn: "",
    purchaseLinks: [
      { name: "Amazon", url: "https://a.co/d/0jy0jZ4" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 7,
    title: "Overcoming The Spirit Of Poverty",
    subtitle: "Unlocking Wealth and Prosperity",
    genre: "Prosperity & Kingdom",
    image: img20210516wa0000,
    description: "God is willing and able to give us wealth, riches, success, and prosperity. Learn how your riches are stored in your gifts, talents, potentials, and creativity.",
    fullDescription: "God is willing and able to give us wealth, riches, success, and prosperity. In this book, you will learn that your riches and wealth are stored in your gifts, talents, potentials, and creativity. You will also learn about supernatural wealth transfer. You will learn that poverty is a spiritual, natural, and social phenomena. You will discover the manifestations of the spirit of poverty, and how to deal with it.",
    topics: [
      "Wealth and Prosperity",
      "Gifts and Talents",
      "Supernatural Wealth Transfer",
      "Understanding Poverty",
      "Manifestations of Poverty Spirit",
      "Overcoming Poverty"
    ],
    publicationYear: "",
    isbn: "978-978-982-498-8",
    purchaseLinks: [
      { name: "Amazon", url: "https://a.co/d/112zRg5" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 8,
    title: "How To Measure The Growth Of Your Faith And Spiritual Maturity",
    subtitle: "Understanding Spiritual Laws and Faith Growth",
    genre: "Prosperity & Kingdom",
    image: img20210516,
    description: "Discover the spiritual laws that govern faith and learn how to measure your spiritual growth through biblical indicators.",
    fullDescription: "There are laws that govern the universe and human existence. There are spiritual laws and there are natural and scientific laws. The proper utilization of these laws have helped improve the quality of human existence, and the society at large. In the kingdom of God, which we belong to, 'Faith' is a spiritual law, and it is to everyone according to his faith. Faith is the spiritual currency through which we transact with the invisible God and His Angels. Hence, there is a need to grow and develop our faith. However, at new birth, faith is received as a seed that has the capacity to grow, if well nurtured. Romans 12:3; IIThessalonian 1:3. Furthermore, there are spiritual indicators to determine if your faith is growing. Some of these indicators are Love, Forgiveness, Patience, Giving, Obedience, Fear and Compassion, Spiritual understanding, and Revelational knowledge of God's word.",
    topics: [
      "Spiritual Laws of Faith",
      "Love and Forgiveness",
      "Patience and Giving",
      "Obedience and Fear",
      "Compassion",
      "Spiritual Understanding",
      "Revelational Knowledge"
    ],
    publicationYear: "",
    isbn: "978-978-924071-1",
    purchaseLinks: [
      { name: "Amazon", url: "https://a.co/d/eKSTnAr" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 9,
    title: "The True Foundation Of Godly Prosperity",
    subtitle: "Biblical Principles for True Wealth",
    genre: "Prosperity & Kingdom",
    image: book4,
    description: "Learn the true foundational principles of kingdom prosperity and discover how your foundation determines your success and durability.",
    fullDescription: "There are many benefits to enjoy after salvation. This book is intended to teach you the true foundational principles of kingdom prosperity. Many are trying to be prosperous when they have not laid a good foundation. A destiny built on nothing will definitely collapse. Your foundation determines your height, success and durability. In this book you will discover the true foundational principles, such as: Knowledge, Understanding, Wisdom, Faith, Love, Faithfulness, God-ordained relationship, Divine obedience and the fear of God, etc.",
    topics: [
      "Knowledge",
      "Understanding",
      "Wisdom",
      "Faith",
      "Love",
      "Faithfulness",
      "God-ordained Relationship",
      "Divine Obedience and the Fear of God"
    ],
    publicationYear: "2014",
    isbn: "978-978-942-879-3",
    purchaseLinks: [
      { name: "Amazon", url: "https://a.co/d/iW76xZs" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
  {
    id: 10,
    title: "Discovering The Evil Part In Your Lineage",
    subtitle: "Breaking Generational Curses",
    genre: "Prophecy & Spiritual Growth",
    image: revFrancisBook,
    description: "This book is directed to unveil the evil pattern in your lineage. Discover how to confront and break the challenges that have been transferred through generations.",
    fullDescription: "This book is directed to unveil the evil pattern in your lineage. Everyone has an evil pattern that is prevalent in his/her family. Anything that is a challenge in your family which you fail to confront, or wish away, or does not believe in its existence would ultimately be transferred to your children and to the rest of your generation. If our fathers had fought the evil nature or trend in our lineage, there wouldn't have been any battle to fight again in our lineage.",
    topics: [
      "Identifying Evil Patterns",
      "Generational Curses",
      "Family Challenges",
      "Breaking Lineage Battles",
      "Spiritual Warfare",
      "Confronting Family Issues"
    ],
    publicationYear: "",
    isbn: "",
    purchaseLinks: [
      { name: "Amazon", url: "https://www.amazon.com/dp/B0BF5XVLDX" },
      { name: "Contact Author", url: "#contact" }
    ]
  },
];

export default function Books() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleLearnMore = (book: typeof books[0]) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const genres = ["All", "Prophecy & Spiritual Growth", "Parenting & Dreams", "Prosperity & Kingdom"];

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {filteredBooks.map((book, index) => (
              <BookCard
                key={book.id}
                book={book}
                index={index}
                onLearnMore={() => handleLearnMore(book)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:max-h-[80vh]">
          {selectedBook && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl sm:text-3xl">
                  {selectedBook.title}
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg">
                  {selectedBook.subtitle}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-48 flex-shrink-0">
                    <img
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      className="w-full rounded-md shadow-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <Badge variant="secondary">{selectedBook.genre}</Badge>
                    </div>
                    {selectedBook.publicationYear && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">Publication Year</p>
                        <p className="text-foreground">{selectedBook.publicationYear}</p>
                      </div>
                    )}
                    {selectedBook.isbn && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">ISBN</p>
                        <p className="text-foreground">{selectedBook.isbn}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">About This Book</h4>
                  <p className="text-foreground leading-relaxed">
                    {selectedBook.fullDescription || selectedBook.description}
                  </p>
                </div>

                {selectedBook.topics && selectedBook.topics.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Key Topics Covered</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground">
                      {selectedBook.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedBook.purchaseLinks && selectedBook.purchaseLinks.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Get This Book</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedBook.purchaseLinks.map((link, index) => (
                        <Button
                          key={index}
                          onClick={() => {
                            if (link.url.startsWith('#')) {
                              setIsDialogOpen(false);
                              const element = document.getElementById(link.url.substring(1));
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            } else {
                              window.open(link.url, '_blank');
                            }
                          }}
                          className="gap-2"
                        >
                          {link.name}
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}


