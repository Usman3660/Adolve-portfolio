"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  AnimatePresence,
} from "framer-motion";
import { Play } from "lucide-react";
import { useVideo } from "./VideoContext";
import { formatSMPTE } from "@/lib/timecode";

type MediaContextType = "grid" | "still" | "video";

export function HeroInteractive() {
  const { openVideo } = useVideo();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Line element refs for precise hit-testing & tracking
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);
  const line4Ref = useRef<HTMLDivElement | null>(null);

  // Live running SMPTE timecode (24fps calculation)
  const [smpteTime, setSmpteTime] = useState("00:00:21:01");
  const [activeHoverLine, setActiveHoverLine] = useState<number | null>(null);
  const [mediaContext, setMediaContext] = useState<MediaContextType>("grid");
  const [isInsideHero, setIsInsideHero] = useState(false);

  useEffect(() => {
    let frame = 21 * 24 + 1;
    const interval = setInterval(() => {
      frame++;
      const seconds = frame / 24;
      setSmpteTime(formatSMPTE(seconds, 24));
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  // =========================================================================
  // 1. INERTIA / PHYSICS-BASED MOUSE FOLLOWER (Lerp / Spring Motion)
  // Moves with linear interpolation and spring damping for fluid float & lag
  // =========================================================================
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Spring physics for natural weight and lag momentum
  const springConfig = { damping: 32, stiffness: 130, mass: 0.85 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // =========================================================================
  // 2. DYNAMIC 3D TILT / VELOCITY ROTATION
  // Tracks speed (ΔX, ΔY). As mouse moves rapidly, card tilts subtly along
  // Z and Y axes. When movement stops, smoothly dampens back to neutral (0).
  // =========================================================================
  const xVelocity = useVelocity(smoothX);
  const yVelocity = useVelocity(smoothY);

  // Smooth the velocity to prevent tilt jitter
  const tiltSpring = { damping: 24, stiffness: 220 };
  const smoothXVel = useSpring(xVelocity, tiltSpring);
  const smoothYVel = useSpring(yVelocity, tiltSpring);

  // 3D rotation based on velocity vector:
  // - rotateZ: subtle lateral tilt into the direction of travel
  // - rotateY: 3D perspective swivel based on horizontal speed
  // - rotateX: 3D tilt based on vertical speed
  const rotateZ = useTransform(smoothXVel, [-1800, 1800], [-9, 9]);
  const rotateY = useTransform(smoothXVel, [-1800, 1800], [-18, 18]);
  const rotateX = useTransform(smoothYVel, [-1800, 1800], [16, -16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    if (!isInsideHero) setIsInsideHero(true);

    // Continuous vertical hit-test so lines activate even behind the follower card
    const clientY = e.clientY;
    const r1 = line1Ref.current?.getBoundingClientRect();
    const r2 = line2Ref.current?.getBoundingClientRect();
    const r3 = line3Ref.current?.getBoundingClientRect();
    const r4 = line4Ref.current?.getBoundingClientRect();

    if (r1 && clientY >= r1.top && clientY <= r1.bottom) {
      setActiveHoverLine(1);
      setMediaContext("grid");
    } else if (r2 && clientY >= r2.top && clientY <= r2.bottom) {
      setActiveHoverLine(2);
      setMediaContext("grid");
    } else if (r3 && clientY >= r3.top && clientY <= r3.bottom) {
      setActiveHoverLine(3);
      setMediaContext("still");
    } else if (r4 && clientY >= r4.top && clientY <= r4.bottom) {
      setActiveHoverLine(4);
      setMediaContext("video");
    }
  };

  const handleMouseEnterContainer = () => {
    setIsInsideHero(true);
  };

  const handleMouseLeaveContainer = () => {
    setIsInsideHero(false);
    setActiveHoverLine(null);
  };

  // Contextual modal reel trigger based on active hover media
  const handleOpenActiveReel = () => {
    if (mediaContext === "still") {
      openVideo({
        url: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-heels-walking-in-slow-motion-41865-large.mp4",
        title: "Jacob & Isaac · Custom Footwear & Heels",
        client: "Jacob & Isaac Atelier",
        timecode: smpteTime,
      });
    } else if (mediaContext === "video") {
      openVideo({
        url: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-fire-in-a-kitchen-42023-large.mp4",
        title: "Broastiano · High-Heat Culinary Preparation",
        client: "Broastiano Kitchens",
        timecode: "00:00:14:09",
      });
    } else {
      openVideo({
        url: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
        title: "PheraLab · Clinical Cosmetics & Formulation",
        client: "PheraLab Skin Science",
        timecode: smpteTime,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
      className="relative min-h-[100vh] w-full bg-black text-white flex flex-col justify-between px-6 sm:px-12 lg:px-16 pt-16 pb-12 overflow-hidden select-none border-b border-neutral-900"
    >
      {/* Top Left Metadata & Corner Marks matching reference */}
      <div className="relative z-10 flex items-start justify-between font-mono text-xs uppercase tracking-widest text-neutral-400">
        <div className="flex flex-col gap-2">
          <div className="w-5 h-5 border-l-2 border-t-2 border-neutral-700" />
          <span className="text-[11px] text-neutral-400 font-mono tracking-widest">
            FILMA STUDIO · LAHORE
          </span>
        </div>
        <div className="w-5 h-5 border-r-2 border-t-2 border-neutral-700" />
      </div>

      {/* ========================================================= */}
      {/* 3. HEADLINE TYPOGRAPHY WITH RIGHTWARD STRETCHING HOVER */}
      {/* When hovered, each line stretches to the right (origin-left, */}
      {/* scaleX: 1.09, x: 28px, expanded letter-spacing, and pink tone) */}
      {/* ========================================================= */}
      <div className="relative z-10 my-auto text-left font-black tracking-tighter leading-[0.84] select-none uppercase font-sans py-12 flex flex-col">
        {/* Line 1: WE MAKE */}
        <div className="overflow-visible py-0.5">
          <motion.div
            ref={line1Ref}
            onMouseEnter={() => {
              setActiveHoverLine(1);
              setMediaContext("grid");
            }}
            onMouseLeave={() => setActiveHoverLine(null)}
            animate={{
              scaleX: activeHoverLine === 1 ? 1.09 : 1,
              x: activeHoverLine === 1 ? 28 : 0,
              letterSpacing: activeHoverLine === 1 ? "0.025em" : "-0.05em",
              color: activeHoverLine === 1 ? "#fbcfe8" : "#ffffff",
            }}
            whileHover={{
              scaleX: 1.09,
              x: 28,
              letterSpacing: "0.025em",
              color: "#fbcfe8",
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ originX: 0 }}
            className="inline-block w-fit text-[14.5vw] font-black leading-[0.84] cursor-pointer will-change-transform select-none"
          >
            WE MAKE
          </motion.div>
        </div>

        {/* Line 2: BRANDS */}
        <div className="overflow-visible py-0.5">
          <motion.div
            ref={line2Ref}
            onMouseEnter={() => {
              setActiveHoverLine(2);
              setMediaContext("grid");
            }}
            onMouseLeave={() => setActiveHoverLine(null)}
            animate={{
              scaleX: activeHoverLine === 2 ? 1.09 : 1,
              x: activeHoverLine === 2 ? 28 : 0,
              letterSpacing: activeHoverLine === 2 ? "0.025em" : "-0.05em",
              color: activeHoverLine === 2 ? "#fbcfe8" : "#ffffff",
            }}
            whileHover={{
              scaleX: 1.09,
              x: 28,
              letterSpacing: "0.025em",
              color: "#fbcfe8",
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ originX: 0 }}
            className="inline-block w-fit text-[14.5vw] font-black leading-[0.84] cursor-pointer will-change-transform select-none"
          >
            BRANDS
          </motion.div>
        </div>

        {/* Line 3: IMPOSSIBLE */}
        <div className="overflow-visible py-0.5">
          <motion.div
            ref={line3Ref}
            onMouseEnter={() => {
              setActiveHoverLine(3);
              setMediaContext("still");
            }}
            onMouseLeave={() => setActiveHoverLine(null)}
            animate={{
              scaleX: activeHoverLine === 3 ? 1.09 : 1,
              x: activeHoverLine === 3 ? 28 : 0,
              letterSpacing: activeHoverLine === 3 ? "0.025em" : "-0.05em",
              color: activeHoverLine === 3 ? "#fbcfe8" : "#ffffff",
            }}
            whileHover={{
              scaleX: 1.09,
              x: 28,
              letterSpacing: "0.025em",
              color: "#fbcfe8",
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ originX: 0 }}
            className="inline-block w-fit text-[14.5vw] font-black leading-[0.84] cursor-pointer will-change-transform select-none"
          >
            IMPOSSIBLE
          </motion.div>
        </div>

        {/* Line 4: TO SCROLL PAST. */}
        <div className="overflow-visible py-0.5">
          <motion.div
            ref={line4Ref}
            onMouseEnter={() => {
              setActiveHoverLine(4);
              setMediaContext("video");
            }}
            onMouseLeave={() => setActiveHoverLine(null)}
            animate={{
              scaleX: activeHoverLine === 4 ? 1.09 : 1,
              x: activeHoverLine === 4 ? 28 : 0,
              letterSpacing: activeHoverLine === 4 ? "0.025em" : "-0.05em",
              color: activeHoverLine === 4 ? "#fbcfe8" : "#ffffff",
            }}
            whileHover={{
              scaleX: 1.09,
              x: 28,
              letterSpacing: "0.025em",
              color: "#fbcfe8",
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ originX: 0 }}
            className="inline-block w-fit text-[14.5vw] font-black leading-[0.84] cursor-pointer will-change-transform select-none"
          >
            TO SCROLL PAST.
          </motion.div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. INERTIA / SPRING FOLLOWER WITH DYNAMIC 3D TILT */}
      {/* ========================================================= */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          rotateX,
          rotateY,
          rotateZ,
          transformPerspective: 1200,
        }}
        className="pointer-events-none absolute z-20 hidden md:flex flex-col items-center select-none"
      >
        {/* Main Floating Card Container (Exact proportions from user image) */}
        <div
          onClick={handleOpenActiveReel}
          className="pointer-events-auto relative w-56 sm:w-64 aspect-[9/14] bg-black/95 rounded-2xl overflow-hidden border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.95)] p-1 backdrop-blur-md hover:border-[#ff1d53]/50 transition-colors duration-500 cursor-pointer group"
        >
          <AnimatePresence mode="wait">
            {/* ---------------------------------------------------- */}
            {/* CONTEXT 1: MULTI-TILE GRID (Image 6a90f026.jpg) */}
            {/* Activated by: "WE MAKE" or "BRANDS" */}
            {/* ---------------------------------------------------- */}
            {mediaContext === "grid" && (
              <motion.div
                key="grid"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1 rounded-xl overflow-hidden"
              >
                {/* Top-Left: Purple cosmetic tube on clean white */}
                <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80"
                    alt="Purple cosmetic tube formulation"
                    fill
                    sizes="150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Top-Right: White skincare tube on white fabric */}
                <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80"
                    alt="White skincare formulation on crumpled fabric"
                    fill
                    sizes="150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom-Left: Solid black tile with live running SMPTE counter (Image exact) */}
                <div className="relative w-full h-full bg-black flex flex-col justify-end p-2 rounded-lg border border-neutral-900">
                  <div className="text-[9.5px] font-mono text-white/90 font-bold tracking-wider tabular-nums">
                    {smpteTime}
                  </div>
                </div>

                {/* Bottom-Right: Woman with clay/gold mask applied with brush */}
                <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80"
                    alt="Model facial skincare brush application"
                    fill
                    sizes="150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------- */}
            {/* CONTEXT 2: SINGLE VERTICAL COMMERCIAL STILL (Heels) */}
            {/* Activated by: "IMPOSSIBLE" */}
            {/* ---------------------------------------------------- */}
            {mediaContext === "still" && (
              <motion.div
                key="still"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900"
              >
                <Image
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=85"
                  alt="High-fashion luxury stiletto heels"
                  fill
                  sizes="300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between font-mono text-[9.5px]">
                  <div>
                    <span className="text-[#dc2626] uppercase font-bold block">
                      STILL CAMPAIGN
                    </span>
                    <span className="text-white/90">JACOB & ISAAC</span>
                  </div>
                  <div className="px-1.5 py-0.5 bg-black/80 rounded border border-white/10 text-white font-bold tabular-nums">
                    {smpteTime}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------- */}
            {/* CONTEXT 3: AUTOPLAYING LOOPING VIDEO (Food Prep) */}
            {/* Activated by: "TO SCROLL PAST." */}
            {/* ---------------------------------------------------- */}
            {mediaContext === "video" && (
              <motion.div
                key="video"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900"
              >
                <video
                  src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-fire-in-a-kitchen-42023-large.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between font-mono text-[9.5px]">
                  <div>
                    <span className="text-[#dc2626] uppercase font-bold block">
                      CULINARY REEL
                    </span>
                    <span className="text-white/90">BROASTIANO</span>
                  </div>
                  <div className="px-1.5 py-0.5 bg-black/80 rounded border border-white/10 text-white font-bold tabular-nums">
                    {smpteTime}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ======================================================= */}
          {/* 5. FLOATING ACTION BADGE (Callout Anchor) */}
          {/* Anchored to the bottom edge of the floating card */}
          {/* Follows card movement and triggers modal video */}
          {/* ======================================================= */}
          <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#b91c1c] text-white font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5 shadow-[0_0_24px_rgba(185,28,28,0.85)] border border-red-400/40 whitespace-nowrap z-30 group-hover:scale-105 group-hover:bg-[#dc2626] transition-all duration-300 pointer-events-auto">
            <Play className="w-2.5 h-2.5 fill-white text-white shrink-0 ml-0.5" />
            <span>CLICK TO PLAY REEL</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Corner Marks */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-neutral-500 pt-8">
        <div className="w-5 h-5 border-l-2 border-b-2 border-neutral-700" />
        <div className="w-5 h-5 border-r-2 border-b-2 border-neutral-700" />
      </div>
    </section>
  );
}

export default HeroInteractive;
