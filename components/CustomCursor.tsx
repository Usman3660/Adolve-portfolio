"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Play } from "lucide-react";

export function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<"default" | "reel" | "circle" | "cyan" | "link">("default");
  const [cursorLabel, setCursorLabel] = useState<string>("WATCH WITH SOUND");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Snappy, smooth spring physics
  const springConfig = { damping: 28, stiffness: 450, mass: 0.35 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const reelEl = target?.closest("[data-cursor='reel']") as HTMLElement | null;
      const circleEl = target?.closest("[data-cursor='circle']") as HTMLElement | null;
      const cyanEl = target?.closest("[data-cursor='cyan']") as HTMLElement | null;
      const linkEl = target?.closest("a, button, [data-cursor='link']") as HTMLElement | null;

      if (reelEl) {
        setCursorMode("reel");
        const customLabel = reelEl.getAttribute("data-cursor-label");
        setCursorLabel(customLabel || "WATCH WITH SOUND");
      } else if (cyanEl) {
        setCursorMode("cyan");
      } else if (circleEl) {
        setCursorMode("circle");
      } else if (linkEl) {
        setCursorMode("link");
      } else {
        setCursorMode("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  const renderReelLabel = () => {
    if (cursorLabel === "WATCH WITH SOUND") {
      return (
        <div className="flex flex-col text-[10px] font-mono uppercase font-bold tracking-wider leading-[1.05] text-left">
          <span>WATCH WITH</span>
          <span>SOUND</span>
        </div>
      );
    }

    if (cursorLabel === "CLICK TO PLAY REEL") {
      return (
        <div className="flex flex-col text-[10px] font-mono uppercase font-bold tracking-wider leading-[1.05] text-left">
          <span>CLICK TO</span>
          <span>PLAY REEL</span>
        </div>
      );
    }

    if (cursorLabel.includes(" ")) {
      const parts = cursorLabel.split(" ");
      const mid = Math.ceil(parts.length / 2);
      const line1 = parts.slice(0, mid).join(" ");
      const line2 = parts.slice(mid).join(" ");
      return (
        <div className="flex flex-col text-[10px] font-mono uppercase font-bold tracking-wider leading-[1.05] text-left">
          <span>{line1}</span>
          <span>{line2}</span>
        </div>
      );
    }

    return (
      <span className="text-[10px] font-mono uppercase font-bold tracking-wider">
        {cursorLabel}
      </span>
    );
  };

  return (
    <>
      {/* 1. Exact Compact Red Pill Badge from Screenshot */}
      {cursorMode === "reel" && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            width: "max-content",
            maxWidth: "160px",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 left-0 z-[999999] pointer-events-none flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#b91c1c] text-white shadow-[0_0_24px_rgba(185,28,28,0.75)] whitespace-nowrap border border-red-500/20 select-none"
        >
          <Play className="w-2.5 h-2.5 fill-white text-white shrink-0 ml-0.5" />
          {renderReelLabel()}
        </motion.div>
      )}

      {/* 2. White Circle Follower seen in Image 3 (Selected work) */}
      {cursorMode === "circle" && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="fixed top-0 left-0 z-[999999] pointer-events-none w-12 h-12 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] select-none"
        />
      )}

      {/* 3. Cyan Circle Follower seen in Image 5 (Inverting rows) */}
      {cursorMode === "cyan" && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="fixed top-0 left-0 z-[999999] pointer-events-none w-11 h-11 rounded-full bg-[#2dd4bf] shadow-[0_0_25px_rgba(45,212,191,0.8)] mix-blend-screen select-none"
        />
      )}

      {/* 4. Unified Smooth Link & Default Cursor (eliminates jittery ring/dot clash) */}
      {(cursorMode === "default" || cursorMode === "link") && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: cursorMode === "link" ? 1.9 : 1,
            backgroundColor:
              cursorMode === "link"
                ? "rgba(255, 255, 255, 0.25)"
                : "rgba(255, 255, 255, 0.9)",
            borderColor:
              cursorMode === "link"
                ? "rgba(255, 255, 255, 0.75)"
                : "rgba(255, 255, 255, 0)",
            boxShadow:
              cursorMode === "link"
                ? "0 0 14px rgba(255, 255, 255, 0.35)"
                : "0 0 8px rgba(255, 255, 255, 0.8)",
          }}
          transition={{
            duration: 0.18,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed top-0 left-0 z-[999999] pointer-events-none w-3 h-3 rounded-full border select-none will-change-transform"
        />
      )}
    </>
  );
}

export default CustomCursor;
