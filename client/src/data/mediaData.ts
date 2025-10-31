export interface Video {
  id: number;
  title: string;
  youtubeId: string;
  duration: string;
}

export interface Audio {
  id: number;
  title: string;
  url: string;
  duration: string;
}

export interface Image {
  id: number;
  title: string;
  url: string;
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Understanding Spiritual Warfare",
    youtubeId: "dQw4w9WgXcQ",
    duration: "15:30",
  },
  {
    id: 2,
    title: "The Power of Faith",
    youtubeId: "dQw4w9WgXcQ",
    duration: "22:45",
  },
];

export const audios: Audio[] = [
  {
    id: 1,
    title: "Your Dreams and Your Destiny - Episode 1",
    url: "#",
    duration: "30:00",
  },
  {
    id: 2,
    title: "Understanding Kingdom Principles",
    url: "#",
    duration: "25:15",
  },
];

export const images: Image[] = [
  {
    id: 1,
    title: "Ministry Event 2024",
    url: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Book Launch Ceremony",
    url: "https://via.placeholder.com/400x300",
  },
];
