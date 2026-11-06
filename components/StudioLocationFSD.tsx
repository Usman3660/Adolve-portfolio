"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function StudioLocationFSD() {
  const [timeStr, setTimeStr] = useState<string>("00:44:18");
  const [isFsdHovered, setIsFsdHovered] = useState<boolean>(false);
  const [isCityHovered, setIsCityHovered] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTimeStr(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const smoothCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section className="w-full bg-black text-white py-24 sm:py-32 border-t border-white/10 select-none overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Massive FSD Typography with Physical Rightward Stretch */}
          <div className="lg:col-span-7 flex items-center overflow-visible">
            <motion.div
              onMouseEnter={() => setIsFsdHovered(true)}
              onMouseLeave={() => setIsFsdHovered(false)}
              animate={{
                scaleX: isFsdHovered ? 1.12 : 1,
                x: isFsdHovered ? 36 : 0,
              }}
              transition={{
                duration: 0.75,
                ease: smoothCurve,
              }}
              style={{ transformOrigin: "left center" }}
              className="font-sans font-black text-[22vw] sm:text-[18vw] lg:text-[200px] xl:text-[230px] tracking-tighter leading-none select-none inline-flex items-center cursor-pointer will-change-transform"
            >
              {/* F: Anchored left */}
              <span className="text-[#f5f5f5]">F</span>

              {/* S: Stretches right */}
              <motion.span
                animate={{
                  x: isFsdHovered ? 20 : 0,
                }}
                transition={{
                  duration: 0.75,
                  ease: smoothCurve,
                }}
                className="text-[#dc2626] inline-block will-change-transform"
              >
                S
              </motion.span>

              {/* D: Stretches further right */}
              <motion.span
                animate={{
                  x: isFsdHovered ? 40 : 0,
                }}
                transition={{
                  duration: 0.75,
                  ease: smoothCurve,
                }}
                className="text-[#f5f5f5] inline-block will-change-transform"
              >
                D
              </motion.span>
            </motion.div>
          </div>

          {/* Right Column: Studio Details (Faisalabad) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left font-sans">
            {/* Tag: ● THE STUDIO */}
            <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[#dc2626]">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span className="text-neutral-400">THE STUDIO</span>
            </div>

            {/* City Title with Rightward Hover Stretch */}
            <div className="overflow-visible">
              <motion.h3
                onMouseEnter={() => setIsCityHovered(true)}
                onMouseLeave={() => setIsCityHovered(false)}
                animate={{
                  scaleX: isCityHovered ? 1.10 : 1,
                  x: isCityHovered ? 24 : 0,
                  letterSpacing: isCityHovered ? "0.025em" : "-0.03em",
                  color: isCityHovered ? "#fbcfe8" : "#ffffff",
                }}
                transition={{
                  duration: 0.75,
                  ease: smoothCurve,
                }}
                style={{ transformOrigin: "left center" }}
                className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-white mb-3 cursor-pointer will-change-transform select-none"
              >
                Faisalabad
              </motion.h3>
            </div>

            {/* Address */}
            <div className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed mb-6">
              <p>Executive Production Soundstage</p>
              <p>Kohinoor City, Faisalabad, Pakistan</p>
            </div>

            {/* Live Local Time */}
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-300 mb-1.5 tabular-nums">
              LOCAL TIME {timeStr}
            </div>

            {/* Operational Hours */}
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 mb-8">
              MON TO SAT, 10:00 TO 19:00 PKT
            </div>

            {/* Pill Action Button: Open in Google Maps → */}
            <a
              href="https://maps.google.com/?q=Kohinoor+City,+Faisalabad,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-mono text-white transition-colors duration-200 inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudioLocationFSD;
