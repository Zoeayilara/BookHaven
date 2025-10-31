import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Play, Music, Image as ImageIcon } from "lucide-react";

interface Video {
  id: number;
  title: string;
  youtubeId: string;
  duration: string;
}

interface Audio {
  id: number;
  title: string;
  url: string;
  duration: string;
}

interface Image {
  id: number;
  title: string;
  url: string;
}

interface MediaData {
  videos: Video[];
  audios: Audio[];
  images: Image[];
}

export default function Media() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mediaData, setMediaData] = useState<MediaData>({
    videos: [],
    audios: [],
    images: [],
  });

  useEffect(() => {
    // Fetch media data from JSON file
    fetch("/media-content.json")
      .then((res) => res.json())
      .then((data) => setMediaData(data))
      .catch((error) => {
        console.error("Error loading media:", error);
        // Fallback to empty arrays if file doesn't exist
      });
  }, []);

  return (
    <section id="media" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-media-title">
            Media Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-center text-muted-foreground mb-12" data-testid="text-media-subtitle">
            Watch sermons, listen to teachings, and view moments from our ministry
          </p>

          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="videos" className="gap-2">
                <Play className="w-4 h-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="audio" className="gap-2">
                <Music className="w-4 h-4" />
                Audio
              </TabsTrigger>
              <TabsTrigger value="images" className="gap-2">
                <ImageIcon className="w-4 h-4" />
                Images
              </TabsTrigger>
            </TabsList>

            {/* Videos Tab */}
            <TabsContent value="videos" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaData.videos.map((video) => (
                  <Card
                    key={video.id}
                    className="group overflow-hidden hover-elevate cursor-pointer transition-all duration-300"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, "_blank")}
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg line-clamp-2">{video.title}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Audio Tab */}
            <TabsContent value="audio" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaData.audios.map((audio) => (
                  <Card
                    key={audio.id}
                    className="group hover-elevate cursor-pointer transition-all duration-300"
                    onClick={() => window.open(audio.url, "_blank")}
                  >
                    <div className="p-6 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <Music className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{audio.title}</h3>
                        <p className="text-sm text-muted-foreground">{audio.duration}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Images Tab */}
            <TabsContent value="images" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mediaData.images.map((image) => (
                  <Card
                    key={image.id}
                    className="group overflow-hidden hover-elevate cursor-pointer transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={image.url}
                        alt={image.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm line-clamp-1">{image.title}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
