"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowUpRight, Filter } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";
import { useVideo } from "@/components/VideoContext";
import { SplitText } from "@/components/SplitText";

type CategoryFilter = "All" | "Video Ads" | "Product Shoots" | "E-commerce" | "Commercial";

const CATEGORIES: CategoryFilter[] = [
  "All",
  "Video Ads",
  "Product Shoots",
  "E-commerce",
  "Commercial",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const { openVideo } = useVideo();

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-black text-[#f5f5f5] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-neutral-900 pb-12 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#dc2626] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
            <span>Commercial Portfolio Index · 2023 — 2024</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-sans tracking-tight text-white mb-6">
            <SplitText text="Selected Commercial Releases." />
          </h1>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Archive of high-impact commercial campaigns, tactile macro product
            shoots, and brand films produced at our Bahria Orchard soundstage.
            All projects shot at 24fps cinema standards.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-neutral-900 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-2 text-neutral-500 mr-2 text-[11px] uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>

            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 border transition-all duration-150 uppercase tracking-wider text-xs ${
                    isActive
                      ? "border-[#b91c1c] bg-[#b91c1c] text-white font-bold shadow-sm"
                      : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="text-neutral-500 text-[11px] uppercase tracking-widest">
            Showing {filteredProjects.length} of {PROJECTS.length} Projects
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between border border-neutral-900 bg-neutral-950/70 p-5 hover:border-neutral-700 transition-all duration-300"
            >
              <div>
                {/* Media Wrapper with cursor trigger */}
                <div
                  data-cursor="reel"
                  data-cursor-label="PLAY REEL"
                  className="relative aspect-video w-full overflow-hidden bg-neutral-900 mb-5 cursor-pointer"
                  onClick={() =>
                    openVideo({
                      url: project.videoUrl,
                      title: project.title,
                      client: project.client,
                      timecode: project.timecode,
                    })
                  }
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                  {/* SMPTE Timecode Tag */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 backdrop-blur-md border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-300">
                    {project.timecode}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-neutral-900/90 border border-neutral-800 text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                    {project.category}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[#b91c1c] text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex items-baseline justify-between mb-1.5">
                  <h3 className="text-xl font-bold text-white font-sans tracking-tight group-hover:text-[#dc2626] transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500">
                    {project.year}
                  </span>
                </div>

                <div className="font-mono text-xs text-neutral-400 mb-3">
                  {project.client}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-mono mb-6 line-clamp-2">
                  {project.tagline}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-t border-neutral-900 font-mono text-xs">
                  {project.stats.slice(0, 2).map((st, i) => (
                    <div key={i}>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                        {st.label}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-900 font-mono text-xs">
                <button
                  onClick={() =>
                    openVideo({
                      url: project.videoUrl,
                      title: project.title,
                      client: project.client,
                      timecode: project.timecode,
                    })
                  }
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-[#dc2626] transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Play Cut</span>
                </button>

                <Link
                  href={`/work/${project.slug}`}
                  data-curtain-title={project.title.toUpperCase()}
                  className="inline-flex items-center gap-1 text-white hover:text-[#dc2626] transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
