import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import authorImage from "@assets/EBGOGUN4857.jpg";

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
                  loading="lazy"
                  className="w-full h-full object-cover"
                  data-testid="img-author-portrait"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed" data-testid="text-author-bio-1">
                Francis Egbogun is a Christian leader, pastor, and philanthropist who has been 
                a faithful minister of God for over three decades. First visited by God in a 
                vision in 1991, he received a global mandate that would reach many nations. 
                In 1993, the LORD commissioned him through the Holy Spirit to set His people 
                free from bondage—a mandate he has faithfully pursued ever since.
              </p>

              <p className="text-lg text-foreground leading-relaxed" data-testid="text-author-bio-2">
                In January 2002, he founded the Movement of Holy Spirit Ministry, through which 
                he has impacted countless lives with the Word of God. He is also the host of 
                the radio programme "YOUR DREAMS AND YOUR DESTINY" on Radio 1 (103.5 FM), where 
                he shares profound insights on dream interpretations, dream languages, and symbols, 
                helping many gain understanding of the spiritual realm.
              </p>

              <div className="relative bg-card border border-card-border rounded-md p-6 my-8">
                <Quote className="w-8 h-8 text-primary absolute -top-4 -left-2" />
                <p className="font-serif text-xl italic text-card-foreground pl-6" data-testid="text-author-quote">
                  "Go and set My people free from bondage."
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed" data-testid="text-author-bio-3">
                A theologian with Bachelor, Master, and Doctorate degrees in Theological Science 
                from United Bible University in Lagos, Nigeria, Francis is an astute researcher 
                of the deep things of the Bible. He has successfully authored numerous books on 
                Christian living, including "Your Dreams And Your Destiny," "Overcoming The Spirit 
                Of Poverty," and "The True Foundation Of Godly Prosperity." He is happily married 
                to Florence, who pastors alongside him, and they are blessed with four children.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-muted rounded-md px-4 py-2">
                  <p className="text-sm text-muted-foreground">Published Books</p>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-stat-books">12+</p>
                </div>
                <div className="bg-muted rounded-md px-4 py-2">
                  <p className="text-sm text-muted-foreground">Years in Ministry</p>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-stat-awards">30+</p>
                </div>
                <div className="bg-muted rounded-md px-4 py-2">
                  <p className="text-sm text-muted-foreground">Founded Ministry</p>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-stat-countries">2002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
