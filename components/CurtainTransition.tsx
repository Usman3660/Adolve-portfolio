"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface CurtainContextType {
  navigateTo: (href: string, title?: string) => void;
  isTransitioning: boolean;
}

const CurtainContext = createContext<CurtainContextType | undefined>(undefined);

export function useCurtainTransition() {
  const context = useContext(CurtainContext);
  if (!context) {
    throw new Error("useCurtainTransition must be used within CurtainProvider");
  }
  return context;
}

export function CurtainProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetTitle, setTargetTitle] = useState("FILMA");

  // Derive readable title from href if none provided
  const getTitleFromHref = (href: string): string => {
    const clean = href.replace(/^\//, "").split("/")[0].toUpperCase();
    if (!clean) return "STUDIO";
    if (clean === "WORK") return "SELECTED WORK";
    if (clean === "ABOUT") return "STUDIO MANIFESTO";
    if (clean === "PRICING") return "PRODUCTION MATRIX";
    if (clean === "CONTACT") return "COMMISSION BRIEF";
    if (clean === "JOIN-US") return "TALENT ROSTER";
    return clean;
  };

  const navigateTo = (href: string, title?: string) => {
    // If navigating to current page, do nothing
    if (href === pathname) return;

    setTargetTitle(title || getTitleFromHref(href));
    setIsTransitioning(true);

    // After curtain covers viewport, push route
    setTimeout(() => {
      router.push(href);
      // Let new page mount, then sweep curtain out
      setTimeout(() => {
        setIsTransitioning(false);
      }, 550);
    }, 450);
  };

  // Intercept global link clicks with data-curtain or standard relative links
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      // Only intercept internal page routes starting with /
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        !anchor.getAttribute("target") &&
        !anchor.getAttribute("download")
      ) {
        // Prevent default browser jump, trigger curtain
        e.preventDefault();
        const customTitle = anchor.getAttribute("data-curtain-title");
        navigateTo(href, customTitle || undefined);
      }
    };

    document.addEventListener("click", handleGlobalClick, true);
    return () => document.removeEventListener("click", handleGlobalClick, true);
  }, [pathname]);

  return (
    <CurtainContext.Provider value={{ navigateTo, isTransitioning }}>
      {children}

      {/* Red Curtain Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1], // cinematic wipe curve
            }}
            className="fixed inset-0 z-[999999] bg-[#b91c1c] text-white flex flex-col justify-between p-8 sm:p-16 select-none pointer-events-auto"
          >
            {/* Top Bar of Curtain */}
            <div className="flex items-center justify-between font-mono text-xs text-white/80 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>FILMA STUDIO · LAHORE</span>
              </div>
              <div>TC 00:00:24:00</div>
            </div>

            {/* Massive Bold Centered Destination Title */}
            <div className="my-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-sans tracking-tighter text-white uppercase"
              >
                {targetTitle}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="font-mono text-xs uppercase tracking-widest text-white/70 mt-4"
              >
                COMMERCIAL FILM & GROWTH
              </motion.div>
            </div>

            {/* Bottom Bar of Curtain */}
            <div className="flex items-center justify-between font-mono text-xs text-white/70">
              <span>Bahria Orchard Soundstage</span>
              <span>24 FPS LIVE SYNC</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CurtainContext.Provider>
  );
}

export default CurtainProvider;

