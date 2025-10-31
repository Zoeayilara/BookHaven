import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

export default function AdminMedia() {
  const [mediaData, setMediaData] = useState<MediaData>({
    videos: [],
    audios: [],
    images: [],
  });
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  // Simple password protection (you should change this)
  const ADMIN_PASSWORD = "pastor2024";

  useEffect(() => {
    // Load existing media data from API
    fetch("/api/media")
      .then((res) => res.json())
      .then((data) => setMediaData(data))
      .catch(() => {
        console.log("No existing media data found");
      });
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const addVideo = () => {
    const newVideo: Video = {
      id: Date.now(),
      title: "",
      youtubeId: "",
      duration: "",
    };
    setMediaData({
      ...mediaData,
      videos: [...mediaData.videos, newVideo],
    });
  };

  const updateVideo = (id: number, field: keyof Video, value: string) => {
    setMediaData({
      ...mediaData,
      videos: mediaData.videos.map((v) =>
        v.id === id ? { ...v, [field]: value } : v
      ),
    });
  };

  const deleteVideo = (id: number) => {
    setMediaData({
      ...mediaData,
      videos: mediaData.videos.filter((v) => v.id !== id),
    });
  };

  const addAudio = () => {
    const newAudio: Audio = {
      id: Date.now(),
      title: "",
      url: "",
      duration: "",
    };
    setMediaData({
      ...mediaData,
      audios: [...mediaData.audios, newAudio],
    });
  };

  const updateAudio = (id: number, field: keyof Audio, value: string) => {
    setMediaData({
      ...mediaData,
      audios: mediaData.audios.map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      ),
    });
  };

  const deleteAudio = (id: number) => {
    setMediaData({
      ...mediaData,
      audios: mediaData.audios.filter((a) => a.id !== id),
    });
  };

  const addImage = () => {
    const newImage: Image = {
      id: Date.now(),
      title: "",
      url: "",
    };
    setMediaData({
      ...mediaData,
      images: [...mediaData.images, newImage],
    });
  };

  const updateImage = (id: number, field: keyof Image, value: string) => {
    setMediaData({
      ...mediaData,
      images: mediaData.images.map((i) =>
        i.id === id ? { ...i, [field]: value } : i
      ),
    });
  };

  const deleteImage = (id: number) => {
    setMediaData({
      ...mediaData,
      images: mediaData.images.filter((i) => i.id !== id),
    });
  };

  const saveChanges = async () => {
    try {
      const response = await fetch("/api/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mediaData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Media saved! Changes are now live on the website.",
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save media data",
        variant: "destructive",
      });
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    return data.url;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Media Management</h1>
          <Button onClick={saveChanges} className="gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="videos">Videos ({mediaData.videos.length})</TabsTrigger>
            <TabsTrigger value="audio">Audio ({mediaData.audios.length})</TabsTrigger>
            <TabsTrigger value="images">Images ({mediaData.images.length})</TabsTrigger>
          </TabsList>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-4">
            <Button onClick={addVideo} className="gap-2">
              <Plus className="w-4 h-4" />
              Add Video
            </Button>
            {mediaData.videos.map((video) => (
              <Card key={video.id} className="p-4">
                <div className="grid gap-4">
                  <Input
                    placeholder="Video Title"
                    value={video.title}
                    onChange={(e) => updateVideo(video.id, "title", e.target.value)}
                  />
                  <Input
                    placeholder="YouTube Video ID (e.g., dQw4w9WgXcQ)"
                    value={video.youtubeId}
                    onChange={(e) => updateVideo(video.id, "youtubeId", e.target.value)}
                  />
                  <Input
                    placeholder="Duration (e.g., 15:30)"
                    value={video.duration}
                    onChange={(e) => updateVideo(video.id, "duration", e.target.value)}
                  />
                  <Button
                    variant="destructive"
                    onClick={() => deleteVideo(video.id)}
                    className="gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Audio Tab */}
          <TabsContent value="audio" className="space-y-4">
            <Button onClick={addAudio} className="gap-2">
              <Plus className="w-4 h-4" />
              Add Audio
            </Button>
            {mediaData.audios.map((audio) => (
              <Card key={audio.id} className="p-4">
                <div className="grid gap-4">
                  <Input
                    placeholder="Audio Title"
                    value={audio.title}
                    onChange={(e) => updateAudio(audio.id, "title", e.target.value)}
                  />
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Audio File</label>
                    <Input
                      type="file"
                      accept="audio/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          try {
                            const url = await uploadFile(file);
                            updateAudio(audio.id, "url", url);
                            toast({ title: "Success", description: "Audio uploaded!" });
                          } catch (error) {
                            toast({ title: "Error", description: "Upload failed", variant: "destructive" });
                          }
                        }
                      }}
                    />
                    {audio.url && <p className="text-sm text-muted-foreground mt-1">File: {audio.url}</p>}
                  </div>
                  <Input
                    placeholder="Duration (e.g., 30:00)"
                    value={audio.duration}
                    onChange={(e) => updateAudio(audio.id, "duration", e.target.value)}
                  />
                  <Button
                    variant="destructive"
                    onClick={() => deleteAudio(audio.id)}
                    className="gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Images Tab */}
          <TabsContent value="images" className="space-y-4">
            <Button onClick={addImage} className="gap-2">
              <Plus className="w-4 h-4" />
              Add Image
            </Button>
            {mediaData.images.map((image) => (
              <Card key={image.id} className="p-4">
                <div className="grid gap-4">
                  <Input
                    placeholder="Image Title"
                    value={image.title}
                    onChange={(e) => updateImage(image.id, "title", e.target.value)}
                  />
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Image</label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          try {
                            const url = await uploadFile(file);
                            updateImage(image.id, "url", url);
                            toast({ title: "Success", description: "Image uploaded!" });
                          } catch (error) {
                            toast({ title: "Error", description: "Upload failed", variant: "destructive" });
                          }
                        }
                      }}
                    />
                  </div>
                  {image.url && (
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-48 object-cover rounded"
                    />
                  )}
                  <Button
                    variant="destructive"
                    onClick={() => deleteImage(image.id)}
                    className="gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
