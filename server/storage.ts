import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

// modify the interface with any CRUD methods
// you might need

interface MediaData {
  videos: Array<{ id: number; title: string; youtubeId: string; duration: string }>;
  audios: Array<{ id: number; title: string; url: string; duration: string }>;
  images: Array<{ id: number; title: string; url: string }>;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getMediaData(): MediaData;
  saveMediaData(data: MediaData): void;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private mediaFilePath: string;

  constructor() {
    this.users = new Map();
    this.mediaFilePath = path.join(process.cwd(), "client", "public", "media-content.json");
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  getMediaData(): MediaData {
    try {
      if (fs.existsSync(this.mediaFilePath)) {
        const data = fs.readFileSync(this.mediaFilePath, "utf-8");
        return JSON.parse(data);
      }
    } catch (error) {
      console.error("Error reading media data:", error);
    }
    return { videos: [], audios: [], images: [] };
  }

  saveMediaData(data: MediaData): void {
    try {
      const dir = path.dirname(this.mediaFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(this.mediaFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error saving media data:", error);
      throw error;
    }
  }
}

export const storage = new MemStorage();
