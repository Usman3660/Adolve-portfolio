"use client";

import React, { useRef } from "react";
import { useVideo } from "./VideoContext";

interface SplitColumn {
  number: string;
  slug: string;
  title: string;
  description: string;
  videoUrl: string;
}

const COLUMNS: SplitColumn[] = [
  {
    number: "01",
    slug: "pheralab",
    title: "PHERALAB",
    description: "Two sensual perfume campaigns: Her Moans and Her Loss.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
  },
  {
    number: "02",
    slug: "jacob-and-isaac",
    title: "JACOB & ISAAC",
    description: "One cinematic film for a custom-made shoe brand.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-tailor-working-with-measuring-tape-in-his-workshop-43033-large.mp4",
  },
  {
    number: "03",
    slug: "broastiano",
    title: "BROASTIANO",
    description: "A preparation video, creative images and menu photos.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-frying-chicken-drumsticks-in-boiling-oil-42861-large.mp4",
  },
];

export function HeroSplitReels() {
  const { openVideo } = useVideo();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleOpenReel = (col: SplitColumn) => {
    openVideo({
      url: col.videoUrl,
      title: `${col.title} · Commercial Reel`,
      client: col.title,
      timecode: "00:00:15:00",
    });
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-black grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 overflow-hidden select-none">
      {COLUMNS.map((col, idx) => (
        <div
          key={col.number}
          data-cursor="reel"
          data-cursor-label="WATCH WITH SOUND"
          onClick={() => handleOpenReel(col)}
          className="group relative h-full w-full flex flex-col justify-end p-8 sm:p-12 overflow-hidden cursor-pointer"
        >
          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              src={col.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/35" />
          </div>

          {/* Bottom Content Metadata matching Image 1 */}
          <div className="relative z-10 font-sans pointer-events-none">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">
              {col.number}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 flex items-center gap-2 group-hover:text-[#dc2626] transition-colors">
              <span>{col.title}</span>
              <span className="text-xl sm:text-2xl">→</span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-sm">
              {col.description}
            </p>
          </div>

          {/* Center SCROLL indicator on column 2 as seen in Image 1 */}
          {idx === 1 && (
            <div className="absolute bottom-4 left-0 right-0 z-10 text-center font-mono text-[10px] uppercase tracking-widest text-neutral-400 pointer-events-none hidden md:block">
              SCROLL
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default HeroSplitReels;
