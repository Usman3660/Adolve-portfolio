"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { HeroSplitReels } from "@/components/HeroSplitReels";
import { HeroInteractive } from "@/components/HeroInteractive";
import { Ticker } from "@/components/Ticker";
import { ServicesTable } from "@/components/ServicesTable";
import { StudioLocationFSD } from "@/components/StudioLocationFSD";
import { useVideo } from "@/components/VideoContext";
import { PROJECTS } from "@/lib/projects-data";

export default function HomePage() {
  const { openVideo } = useVideo();

  const handleOpenPheralab = () => {
    openVideo({
      url: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
      title: "PheraLab · Clinical Perfume & Skincare",
      client: "PheraLab Skin Science",
      timecode: "00:00:48:12",
    });
  };

  const handleOpenZeroLifestyle = () => {
    openVideo({
      url: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-man-wearing-high-tech-glasses-41617-large.mp4",
      title: "Zero Lifestyle · Quantum Biometrics Smartwatch",
      client: "Zero Lifestyle Technologies",
      timecode: "00:01:14:18",
    });
  };

  return (
    <div className="w-full bg-black text-white">
      {/* ========================================================= */}
      {/* SECTION 1: 3-COLUMN SPLIT REELS HERO (Image 1) */}
      {/* ========================================================= */}
      <HeroSplitReels />

      {/* ========================================================= */}
      {/* SECTION 2: KINETIC TYPOGRAPHY HERO (Image 2) */}
      {/* ========================================================= */}
      <HeroInteractive />

      {/* ========================================================= */}
      {/* SECTION 3: SELECTED WORK (Image 3 & Image 50b31f3e.png) */}
      {/* ========================================================= */}
      <section className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20">
        <div className="flex items-baseline justify-between mb-12 pb-6 border-b border-white/10">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-sans tracking-tight text-white capitalize">
            Selected work
          </h2>
          <Link
            href="/work"
            data-curtain-title="SELECTED WORK"
            className="font-mono text-xs sm:text-sm uppercase tracking-widest text-neutral-300 hover:text-[#dc2626] transition-colors flex items-center gap-1.5"
          >
            <span>VIEW ALL WORK</span>
            <span>→</span>
          </Link>
        </div>

        {/* Selected Work Grid with Descriptions BELOW the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16">
          {/* Card 1: Hi Street (Exact match to uploaded image 50b31f3e.png) */}
          <Link
            href="/work/hi-street"
            data-curtain-title="HI STREET"
            className="group flex flex-col cursor-pointer"
          >
            <div
              data-cursor="circle"
              className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900"
            >
              <Image
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=85"
                alt="Hi Street Footwear Campaign"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Description BELOW the card with hover color change */}
            <div className="mt-4 font-sans text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e58e62] transition-colors duration-300">
                Hi Street
              </h3>
              <p className="mt-1 font-sans text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
                A Black Friday campaign, premium reels and product creatives.
              </p>
            </div>
          </Link>

          {/* Card 2: Bunzos (Exact match to uploaded image 50b31f3e.png) */}
          <Link
            href="/work/bunzos"
            data-curtain-title="BUNZOS"
            className="group flex flex-col cursor-pointer"
          >
            <div
              data-cursor="circle"
              className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900"
            >
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85"
                alt="Bunzos Gourmet Burger & Fries"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Description BELOW the card with hover color change */}
            <div className="mt-4 font-sans text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e58e62] transition-colors duration-300">
                Bunzos
              </h3>
              <p className="mt-1 font-sans text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
                Creative images, a video for every menu item and a main brand film.
              </p>
            </div>
          </Link>

          {/* Card 3: PheraLab Model Face Close-up */}
          <Link
            href="/work/pheralab"
            data-curtain-title="PHERALAB"
            className="group flex flex-col cursor-pointer"
          >
            <div
              data-cursor="circle"
              className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900"
            >
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85"
                alt="PheraLab Model Face Close-up"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Description BELOW the card with hover color change */}
            <div className="mt-4 font-sans text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e58e62] transition-colors duration-300">
                PheraLab
              </h3>
              <p className="mt-1 font-sans text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
                Two sensual perfume campaigns: Her Moans and Her Loss.
              </p>
            </div>
          </Link>

          {/* Card 4: Zero Lifestyle Smartwatch Close-up */}
          <Link
            href="/work/zero-lifestyle"
            data-curtain-title="ZERO LIFESTYLE"
            className="group flex flex-col cursor-pointer"
          >
            <div
              data-cursor="circle"
              className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900"
            >
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85"
                alt="Zero Lifestyle Smartwatch on Wrist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Description BELOW the card with hover color change */}
            <div className="mt-4 font-sans text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e58e62] transition-colors duration-300">
                Zero Lifestyle
              </h3>
              <p className="mt-1 font-sans text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
                Quantum Biometrics smartwatch commercial and high-CTR social ads.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: INFINITE MARQUEE TICKER (Image 4) */}
      {/* ========================================================= */}
      <Ticker />

      {/* ========================================================= */}
      {/* SECTION 5: INVERTING SERVICES TABLE (Image 4 & 5) */}
      {/* ========================================================= */}
      <ServicesTable />

      {/* ========================================================= */}
      {/* SECTION 6: FAISALABAD (FSD) STUDIO LOCATION (Image 7b0774d8.png) */}
      {/* ========================================================= */}
      <StudioLocationFSD />
    </div>
  );
}
