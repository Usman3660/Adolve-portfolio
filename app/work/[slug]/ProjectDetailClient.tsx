"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Volume2,
  VolumeX,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Quote,
  Film,
  Sparkles,
} from "lucide-react";
import { Project } from "@/lib/projects-data";
import { useVideo } from "@/components/VideoContext";
import { SplitText } from "@/components/SplitText";

interface ProjectDetailClientProps {
  project: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({
  project,
  nextProject,
}: ProjectDetailClientProps) {
  const { openVideo } = useVideo();
  const [activeCampaignIndex, setActiveCampaignIndex] = useState(0);
  const [inlineMuted, setInlineMuted] = useState(true);
  const inlineVideoRef = useRef<HTMLVideoElement | null>(null);

  const activeCampaign = project.campaigns[activeCampaignIndex] || project.campaigns[0];

  const toggleInlineSound = () => {
    if (inlineVideoRef.current) {
      inlineVideoRef.current.muted = !inlineVideoRef.current.muted;
      setInlineMuted(inlineVideoRef.current.muted);
    }
  };

  const handlePlayMasterReel = () => {
    openVideo({
      url: project.videoUrl,
      title: `${project.title} · Master Reel`,
      client: project.client,
      timecode: project.timecode,
    });
  };

  return (
    <div className="w-full bg-black text-[#f5f5f5] min-h-screen">
      {/* ========================================================= */}
      {/* 1. PROJECT HERO HEADER */}
      {/* ========================================================= */}
      <section className="relative border-b border-neutral-900 pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb & SMPTE Timecode Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs mb-8">
            <div className="flex items-center gap-2 text-neutral-400">
              <Link href="/work" className="hover:text-white transition-colors">
                Work Archive
              </Link>
              <span className="text-neutral-700">/</span>
              <span className="text-white uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px] uppercase tracking-widest font-mono">
                {project.timecode}
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400 text-[11px] font-mono">
                {project.year}
              </span>
            </div>
          </div>

          {/* Main Title & Client */}
          <div className="max-w-4xl mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-sans tracking-tight text-white mb-6">
              <SplitText text={project.title} />
            </h1>
            <p className="font-mono text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-neutral-900 font-mono text-xs">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                Client Brand
              </div>
              <div className="text-white font-medium">{project.client}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                Category
              </div>
              <div className="text-white font-medium">{project.category}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                Production Standard
              </div>
              <div className="text-white font-medium">4K Cinema · 24fps</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                Release Timeline
              </div>
              <div className="text-white font-medium">{project.year} Commercial</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CAMPAIGN TABS & INLINE SOUND-TOGGLE REEL */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Campaign Tab Selectors */}
        <div className="border border-neutral-800 bg-neutral-950/80 p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-neutral-800 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
                Multi-Cut Campaign Execution
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-sans text-white">
                Campaign Variants ({activeCampaignIndex + 1} of{" "}
                {project.campaigns.length})
              </h2>
            </div>

            {/* Campaign Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {project.campaigns.map((camp, cIdx) => (
                <button
                  key={camp.id}
                  onClick={() => setActiveCampaignIndex(cIdx)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 border ${
                    activeCampaignIndex === cIdx
                      ? "border-[#b91c1c] bg-[#b91c1c] text-white font-bold shadow-md"
                      : "border-neutral-800 bg-black/60 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {camp.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Campaign Detail Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold font-sans text-white mb-2">
                {activeCampaign.headline}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                {activeCampaign.description}
              </p>

              {/* Metrics if available */}
              {activeCampaign.metrics && (
                <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
                  {activeCampaign.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="px-3.5 py-2 bg-neutral-900 border border-neutral-800"
                    >
                      <span className="text-[10px] uppercase text-neutral-500 block">
                        {m.label}
                      </span>
                      <span className="text-base font-bold text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-900 text-neutral-400">
                <span>Duration:</span>
                <span className="text-white">{activeCampaign.duration}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-900 text-neutral-400">
                <span>Aspect Ratio:</span>
                <span className="text-white">16:9 Cinema / 9:16 Social</span>
              </div>
              <button
                onClick={handlePlayMasterReel}
                className="mt-2 w-full py-3 bg-white text-black font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Launch Master Cinema Player</span>
              </button>
            </div>
          </div>

          {/* Inline Video Player Viewport */}
          <div className="relative aspect-video w-full bg-black overflow-hidden border border-neutral-800 group">
            <video
              ref={inlineVideoRef}
              key={activeCampaign.videoUrl}
              src={activeCampaign.videoUrl}
              autoPlay
              loop
              muted={inlineMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Video Controls Overlay */}
            <div className="absolute top-4 right-4 flex items-center gap-3">
              <button
                onClick={toggleInlineSound}
                className="px-3 py-1.5 bg-black/80 backdrop-blur-md border border-neutral-800 text-neutral-200 hover:text-white font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 transition-colors"
                aria-label={inlineMuted ? "Unmute audio" : "Mute audio"}
              >
                {inlineMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-red-400" />
                    <span>Muted</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sound Active</span>
                  </>
                )}
              </button>

              <button
                onClick={() =>
                  openVideo({
                    url: activeCampaign.videoUrl,
                    title: `${project.title} · ${activeCampaign.name}`,
                    client: project.client,
                    timecode: activeCampaign.duration,
                  })
                }
                className="px-3 py-1.5 bg-black/80 backdrop-blur-md border border-neutral-800 text-white hover:bg-white hover:text-black font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>SMPTE Fullscreen</span>
              </button>
            </div>

            <div className="absolute bottom-4 left-4 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-400">
              {activeCampaign.name} · {activeCampaign.duration}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. CHALLENGE VS SOLUTION BREAKDOWN */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Challenge */}
          <div className="border border-neutral-900 bg-neutral-950/60 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
                01 · The Creative Bottleneck
              </div>
              <h3 className="text-2xl font-bold font-sans text-white mb-4">
                The Challenge
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-900 font-mono text-[11px] text-neutral-600 uppercase tracking-widest">
              Audit & Diagnostic
            </div>
          </div>

          {/* Solution */}
          <div className="border border-neutral-900 bg-neutral-950/60 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
                02 · The Editorial Execution
              </div>
              <h3 className="text-2xl font-bold font-sans text-white mb-4">
                The Solution
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-900 font-mono text-[11px] text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Calibrated for ROAS Velocity</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. IMPACT STATS & DELIVERABLES */}
        {/* ========================================================= */}
        <div className="border border-neutral-800 bg-neutral-950 p-8 sm:p-12 mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
            03 · Verified Campaign Impact
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-8">
            Performance Metrics
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-neutral-800/80">
            {project.stats.map((stat, sIdx) => (
              <div key={sIdx} className="font-mono">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
                Master Deliverables Package:
              </h4>
              <div className="space-y-3 font-mono text-xs text-neutral-300">
                {project.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Quote Card */}
            {project.quote && (
              <div className="md:col-span-7 border-l md:border-l border-neutral-800 md:pl-8">
                <Quote className="w-6 h-6 text-neutral-600 mb-4" />
                <p className="text-sm sm:text-base text-neutral-200 font-sans italic leading-relaxed mb-4">
                  "{project.quote.text}"
                </p>
                <div className="font-mono text-xs">
                  <div className="text-white font-semibold">
                    {project.quote.author}
                  </div>
                  <div className="text-neutral-500">{project.quote.title}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. CREDITS & PRODUCTION TEAM */}
        {/* ========================================================= */}
        <div className="border border-neutral-900 bg-neutral-950/40 p-8 mb-20 font-mono text-xs">
          <div className="text-neutral-500 uppercase tracking-widest mb-6 text-[10px]">
            Master Production Credits
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {project.credits.map((c, cIdx) => (
              <div key={cIdx}>
                <div className="text-neutral-500 text-[10px] uppercase tracking-wider mb-1">
                  {c.role}
                </div>
                <div className="text-white font-medium">{c.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6. NEXT PROJECT PREVIEW FOOTER */}
        {/* ========================================================= */}
        <div className="border-t border-neutral-900 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
                Next Campaign Release
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white">
                {nextProject.title}
              </h3>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-900 border border-neutral-800">
            <Image
              src={nextProject.heroImage}
              alt={nextProject.title}
              fill
              sizes="100vw"
              className="object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-6 left-6 font-mono text-xs text-white">
              <span className="text-neutral-400 mr-2">{nextProject.client}</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-300 ml-2">{nextProject.timecode}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

