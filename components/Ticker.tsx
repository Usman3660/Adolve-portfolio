"use client";

import React from "react";

export function Ticker() {
  const items = [
    { text: "AMAZON A+", outlined: false },
    { text: "ANIMATION", outlined: true },
    { text: "RESTAURANT REELS", outlined: false },
    { text: "COMMERCIAL ADS", outlined: true },
    { text: "PRODUCT PHOTOGRAPHY", outlined: false },
    { text: "DIRECT RESPONSE", outlined: true },
    { text: "COLOR SCIENCE", outlined: false },
    { text: "ASMR FOLEY", outlined: true },
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden select-none bg-black py-8 border-y border-white/10">
      <div
        className="flex w-max items-center gap-12 animate-marquee will-change-transform"
        style={{ animationDuration: "140s" }}
      >
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12 whitespace-nowrap">
            <span
              className={`text-5xl sm:text-7xl lg:text-8xl font-black font-sans tracking-tight uppercase cursor-pointer select-none ${
                item.outlined
                  ? "text-transparent [-webkit-text-stroke:1.5px_#ffffff] hover:[-webkit-text-stroke:1.5px_#dc2626] transition-all duration-700 ease-out"
                  : "text-white hover:text-[#dc2626] transition-colors duration-700 ease-out"
              }`}
            >
              {item.text}
            </span>
            <span className="w-4 h-4 rounded-full bg-[#dc2626] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
