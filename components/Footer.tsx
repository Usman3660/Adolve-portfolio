"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const [timeStr, setTimeStr] = useState<string>("01:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTimeStr(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black border-t border-neutral-900 text-white pt-16 sm:pt-24 pb-8 sm:pb-12 select-none overflow-x-clip">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* 4-column directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-start font-sans">
          {/* Column 1: STUDIO */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
              STUDIO
            </div>
            <div className="space-y-1 text-sm sm:text-base text-white">
              <p>1292D, Bahria Orchard</p>
              <p>Lahore, Pakistan</p>
            </div>
            <div className="mt-8 font-mono text-xs uppercase tracking-wider text-neutral-500 tabular-nums">
              LAHORE TIME {timeStr}
            </div>
          </div>

          {/* Column 2: TALK TO US */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
              TALK TO US
            </div>
            <div className="space-y-2 text-sm sm:text-base">
              <a
                href="https://wa.me/923190443003"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-[#dc2626] transition-colors"
              >
                +92 319 044 3003
              </a>
              <a
                href="mailto:filmastuddio@gmail.com"
                className="block text-white hover:text-[#dc2626] transition-colors"
              >
                filmastuddio@gmail.com
              </a>
            </div>
          </div>

          {/* Column 3: PAGES */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
              PAGES
            </div>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <Link
                  href="/work"
                  data-curtain-title="SELECTED WORK"
                  className="text-white hover:text-[#dc2626] transition-colors inline-block"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  data-curtain-title="STUDIO MANIFESTO"
                  className="text-white hover:text-[#dc2626] transition-colors inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  data-curtain-title="PRODUCTION ESTIMATOR"
                  className="text-white hover:text-[#dc2626] transition-colors inline-block"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/join-us"
                  data-curtain-title="CREATIVE TALENT"
                  className="text-white hover:text-[#dc2626] transition-colors inline-block"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  data-curtain-title="COMMISSION BRIEF"
                  className="text-white hover:text-[#dc2626] transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
              FOLLOW
            </div>
            <div className="space-y-3 text-sm sm:text-base">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white hover:text-[#dc2626] transition-colors group"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none stroke-[1.8] group-hover:text-[#dc2626] transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/923190443003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white hover:text-[#dc2626] transition-colors group"
              >
                <svg
                  className="w-4 h-4 fill-current group-hover:text-[#dc2626] transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.12.553 4.186 1.604 6.008L.062 24l6.146-1.613a11.98 11.98 0 0 0 5.823 1.506h.005c6.632 0 12.026-5.395 12.026-12.033 0-3.214-1.252-6.236-3.525-8.51A11.95 11.95 0 0 0 12.031 0zm0 22.022c-1.802 0-3.568-.484-5.114-1.401l-.367-.218-3.805.998 1.016-3.71-.239-.38a9.988 9.988 0 0 1-1.534-5.28c0-5.526 4.496-10.022 10.043-10.022 2.68 0 5.2 1.044 7.094 2.938a9.96 9.96 0 0 1 2.943 7.093c0 5.527-4.497 10.024-10.038 10.024zm5.502-7.518c-.302-.151-1.787-.882-2.064-.983-.277-.101-.479-.151-.681.151-.202.302-.782.983-.958 1.185-.176.202-.353.227-.655.076-.302-.151-1.275-.47-2.428-1.499-.898-.801-1.504-1.79-1.68-2.093-.177-.302-.019-.465.132-.616.136-.136.302-.353.454-.529.151-.177.202-.303.302-.505.101-.202.051-.378-.025-.529-.076-.151-.681-1.641-.933-2.246-.245-.59-.494-.51-.681-.52-.176-.008-.378-.01-.58-.01-.202 0-.529.076-.806.378-.277.302-1.059 1.034-1.059 2.522 0 1.488 1.084 2.926 1.235 3.128.151.202 2.133 3.256 5.168 4.568.722.313 1.286.499 1.725.639.725.23 1.385.198 1.906.12.58-.087 1.787-.73 2.039-1.436.252-.705.252-1.31.176-1.436-.075-.126-.277-.202-.579-.353z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* FILMA Massive Watermark: Small initial size, zooms in on hover */}
        <div className="w-full pt-16 sm:pt-24 pb-8 sm:pb-12 flex justify-center items-center overflow-hidden">
          <motion.div
            onClick={scrollToTop}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="cursor-pointer select-none w-full flex justify-center items-center py-4"
          >
            <motion.h1
              variants={{
                rest: {
                  scale: 0.72,
                  opacity: 0.92,
                },
                hover: {
                  scale: 1.04,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-sans font-black text-[#dc2626] text-[20vw] sm:text-[23vw] tracking-tighter leading-none text-center will-change-transform transform-gpu m-0 p-0"
            >
              FILMA
            </motion.h1>
          </motion.div>
        </div>

        {/* Bottom bar: © 2026 FILMA STUDIO & MADE IN LAHORE */}
        <div className="pt-6 sm:pt-8 flex items-center justify-between font-mono text-[11px] sm:text-xs text-neutral-500 uppercase tracking-widest border-t border-neutral-900/60">
          <div>© 2026 FILMA STUDIO</div>
          <div>MADE IN LAHORE</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
