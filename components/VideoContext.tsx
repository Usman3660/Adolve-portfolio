"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface VideoData {
  url: string;
  title?: string;
  client?: string;
  timecode?: string;
}

interface VideoContextType {
  currentVideo: VideoData | null;
  isOpen: boolean;
  openVideo: (data: VideoData) => void;
  closeVideo: () => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export function VideoProvider({ children }: { children: ReactNode }) {
  const [currentVideo, setCurrentVideo] = useState<VideoData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = (data: VideoData) => {
    setCurrentVideo(data);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <VideoContext.Provider value={{ currentVideo, isOpen, openVideo, closeVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
}

