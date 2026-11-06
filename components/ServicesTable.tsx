"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useVideo } from "./VideoContext";

interface ServiceRowData {
  title: string;
  subtitle: string;
  formats: string;
  videoUrl: string;
}

const PRODUCTION_SERVICES: ServiceRowData[] = [
  {
    title: "VIDEO ADS",
    subtitle: "Built to sell, cut to the second.",
    formats: "9:16  ·  1:1  ·  4:5  ·  16:9",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-futuristic-man-wearing-high-tech-glasses-41617-large.mp4",
  },
  {
    title: "PRODUCT\nPHOTOGRAPHY",
    subtitle: "White background, every SKU, nothing missed.",
    formats: "WHITE BG  ·  LIFESTYLE  ·  MODEL",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
  },
  {
    title: "RESTAURANT SHOOTS",
    subtitle: "Shot while it's still steaming.",
    formats: "REELS  ·  MENU STILLS",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-frying-chicken-drumsticks-in-boiling-oil-42861-large.mp4",
  },
];

const MARKETING_SERVICES: ServiceRowData[] = [
  {
    title: "AMAZON A+ & PDP",
    subtitle: "Conversion-optimized brand storefront modules.",
    formats: "STOREFRONTS  ·  A+ MODULES  ·  PDP",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31912-large.mp4",
  },
  {
    title: "DIRECT RESPONSE ADS",
    subtitle: "Engineered to eliminate ad fatigue on Meta & TikTok.",
    formats: "HOOK MATRIX  ·  SCROLL STOPPERS",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-athlete-training-on-a-rooftop-at-night-42436-large.mp4",
  },
  {
    title: "CREATIVE RETAINERS",
    subtitle: "Continuous monthly production with 10% discount.",
    formats: "MONTHLY PRIORITY  ·  ROAS SCALING",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-tailor-working-with-measuring-tape-in-his-workshop-43033-large.mp4",
  },
];

export function ServicesTable() {
  const { openVideo } = useVideo();
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const handleRowClick = (row: ServiceRowData) => {
    openVideo({
      url: row.videoUrl,
      title: `${row.title.replace("\n", " ")} · Filma Service Reel`,
      client: "Commercial Production Service",
      timecode: "00:00:15:00",
    });
  };

  return (
    <section className="w-full bg-black text-white pt-20 pb-32">
      {/* ========================================================= */}
      {/* 1. "We shoot it. Then we help it sell." (Slow Rise + Stretch Hover) */}
      {/* ========================================================= */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[#dc2626]"
        >
          <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
          <span>SERVICES</span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-sans tracking-tight text-white max-w-4xl leading-[1.08] select-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {/* Line 1: We shoot it. Then we help */}
          <span className="block overflow-hidden py-1">
            <motion.span
              className="inline-block will-change-transform cursor-pointer"
              style={{ originX: 0 }}
              whileHover={{
                scaleX: 1.07,
                x: 24,
                letterSpacing: "0.015em",
                color: "#fbcfe8",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              variants={{
                hidden: { y: "140%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 1.6,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              We shoot it. Then we help
            </motion.span>
          </span>

          {/* Line 2: it sell. */}
          <span className="block overflow-hidden py-1">
            <motion.span
              className="inline-block will-change-transform cursor-pointer"
              style={{ originX: 0 }}
              whileHover={{
                scaleX: 1.07,
                x: 24,
                letterSpacing: "0.015em",
                color: "#fbcfe8",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              variants={{
                hidden: { y: "140%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 1.6,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              it sell.
            </motion.span>
          </span>
        </motion.h2>
      </div>

      {/* ========================================================= */}
      {/* 2. 01 PRODUCTION TABLE */}
      {/* ========================================================= */}
      <div className="w-full border-t border-white/20">
        {/* Category Header Bar */}
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#dc2626] font-bold">01</span>
            <span>PRODUCTION</span>
          </div>
          <div>WHAT WE'RE KNOWN FOR</div>
        </div>

        {/* Rows */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {PRODUCTION_SERVICES.map((row) => {
            const isHovered = hoveredRow === row.title;

            return (
              <div
                key={row.title}
                data-cursor="cyan"
                onMouseEnter={() => setHoveredRow(row.title)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => handleRowClick(row)}
                className="group relative w-full py-10 sm:py-14 px-6 sm:px-10 lg:px-16 cursor-pointer select-none overflow-hidden bg-black"
              >
                {/* Red Fill Transition: Moves from beneath (y: 100%) to position (y: 0%) */}
                <motion.div
                  initial={false}
                  animate={{
                    y: isHovered ? "0%" : "100%",
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 bg-[#b91c1c] z-0 pointer-events-none will-change-transform"
                />

                <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                  {/* Left: Huge Title with Rightward Stretch Effect on Hover */}
                  <div className="md:col-span-5 overflow-visible">
                    <motion.h3
                      animate={{
                        scaleX: isHovered ? 1.08 : 1,
                        x: isHovered ? 24 : 0,
                        letterSpacing: isHovered ? "0.02em" : "-0.04em",
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ originX: 0 }}
                      className="inline-block text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tighter uppercase whitespace-pre-line leading-[0.95] text-white will-change-transform"
                    >
                      {row.title}
                    </motion.h3>
                  </div>

                  {/* Center: Subtitle */}
                  <div className="md:col-span-4">
                    <p
                      className={`text-base sm:text-lg font-sans transition-colors duration-300 ${
                        isHovered ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      {row.subtitle}
                    </p>
                  </div>

                  {/* Right: Formats */}
                  <div
                    className={`md:col-span-3 text-left md:text-right font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 ${
                      isHovered ? "text-white/90" : "text-neutral-400"
                    }`}
                  >
                    {row.formats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. 02 MARKETING & GROWTH TABLE */}
      {/* ========================================================= */}
      <div className="w-full border-t border-white/20 mt-16">
        {/* Category Header Bar */}
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-[#dc2626] font-bold">02</span>
            <span>MARKETING & GROWTH</span>
          </div>
          <div>SCALING DIRECT RESPONSE</div>
        </div>

        {/* Rows */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {MARKETING_SERVICES.map((row) => {
            const isHovered = hoveredRow === row.title;

            return (
              <div
                key={row.title}
                data-cursor="cyan"
                onMouseEnter={() => setHoveredRow(row.title)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => handleRowClick(row)}
                className="group relative w-full py-10 sm:py-14 px-6 sm:px-10 lg:px-16 cursor-pointer select-none overflow-hidden bg-black"
              >
                {/* Red Fill Transition: Moves from beneath (y: 100%) to position (y: 0%) */}
                <motion.div
                  initial={false}
                  animate={{
                    y: isHovered ? "0%" : "100%",
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 bg-[#b91c1c] z-0 pointer-events-none will-change-transform"
                />

                <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                  {/* Left: Huge Title with Rightward Stretch Effect on Hover */}
                  <div className="md:col-span-5 overflow-visible">
                    <motion.h3
                      animate={{
                        scaleX: isHovered ? 1.08 : 1,
                        x: isHovered ? 24 : 0,
                        letterSpacing: isHovered ? "0.02em" : "-0.04em",
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ originX: 0 }}
                      className="inline-block text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tighter uppercase whitespace-pre-line leading-[0.95] text-white will-change-transform"
                    >
                      {row.title}
                    </motion.h3>
                  </div>

                  {/* Center: Subtitle */}
                  <div className="md:col-span-4">
                    <p
                      className={`text-base sm:text-lg font-sans transition-colors duration-300 ${
                        isHovered ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      {row.subtitle}
                    </p>
                  </div>

                  {/* Right: Formats */}
                  <div
                    className={`md:col-span-3 text-left md:text-right font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 ${
                      isHovered ? "text-white/90" : "text-neutral-400"
                    }`}
                  >
                    {row.formats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesTable;
