"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  Film,
} from "lucide-react";
import { useVideo } from "./VideoContext";
import { formatSMPTE } from "@/lib/timecode";

export function VideoModal() {
  const { currentVideo, isOpen, closeVideo } = useVideo();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        closeVideo();
      } else if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (e.key.toLowerCase() === "m") {
        toggleMute();
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Video time tracking
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const targetTime = Math.max(0, Math.min(pos * duration, duration));
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2400);
  }, [isPlaying]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!isOpen || !currentVideo) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeVideo();
          }
        }}
      >
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center select-none"
        >
          {/* Top Bar Header */}
          <div
            className={`flex items-center justify-between pb-3 text-xs font-mono transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-[11px] uppercase tracking-wider">
                <Film className="w-3 h-3 text-neutral-300" />
                <span>SMPTE Master Reel</span>
              </span>
              <span className="text-white font-medium tracking-wide">
                {currentVideo.title || "Filma Commercial Cut"}
              </span>
              {currentVideo.client && (
                <span className="hidden sm:inline text-neutral-500">
                  / {currentVideo.client}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-neutral-400 text-[11px] tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>24 FPS LIVE TC</span>
              </div>

              <button
                onClick={closeVideo}
                className="p-1.5 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="Close video player (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Video Viewport */}
          <div
            className="relative aspect-video w-full bg-black overflow-hidden border border-neutral-800/80 shadow-2xl cursor-pointer group"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src={currentVideo.url}
              className="w-full h-full object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              playsInline
            />

            {/* Center Big Play Pause Animation Indicator */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                <div className="w-16 h-16 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-white shadow-xl">
                  <Play className="w-7 h-7 ml-1 fill-white" />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Scrub Controls Bar */}
          <div
            className={`mt-2 bg-neutral-950/90 border border-neutral-800/90 p-3 flex flex-col gap-2.5 transition-opacity duration-300 font-mono text-xs ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Timeline Scrub Track */}
            <div
              className="relative w-full h-2 bg-neutral-800/80 cursor-pointer group/track rounded-sm overflow-hidden"
              onClick={handleScrub}
            >
              <div
                className="absolute top-0 bottom-0 left-0 bg-neutral-200 transition-all duration-75 group-hover/track:bg-white"
                style={{ width: `${progressPercent}%` }}
              />
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_8px_rgba(255,255,255,1)]"
                style={{ left: `${progressPercent}%` }}
              />
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between text-neutral-400">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-neutral-300 transition-colors p-1"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="hover:text-white transition-colors p-1"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                {/* SMPTE Timecode Counter: 00:00:00:00 / 00:01:24:08 */}
                <div className="flex items-center gap-1.5 text-[11px] tracking-wider text-neutral-300">
                  <span className="text-white font-medium">
                    {formatSMPTE(currentTime, 24)}
                  </span>
                  <span className="text-neutral-600">/</span>
                  <span className="text-neutral-500">
                    {formatSMPTE(duration, 24)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase">
                <span className="hidden md:inline text-neutral-500">
                  SPACE: Play/Pause · M: Mute · F: Fullscreen
                </span>

                <button
                  onClick={toggleFullscreen}
                  className="hover:text-white transition-colors p-1"
                  aria-label="Toggle fullscreen"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default VideoModal;

