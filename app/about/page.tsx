"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Film,
  Camera,
  Sliders,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";
import { SplitText } from "@/components/SplitText";
import { TimecodeClock } from "@/components/TimecodeClock";

const TIMELINE_STEPS = [
  {
    step: "01",
    timecode: "TC 00:00:00:00",
    name: "Diagnostic & Strategic Brief",
    duration: "Day 01 — 02",
    description:
      "We dissect your existing creative spend, Meta/TikTok retention drop-offs, and competitor ads. We isolate the single hook angle most likely to interrupt scrolling behavior.",
    deliverable: "Creative Treatment Deck & Hook Matrix",
  },
  {
    step: "02",
    timecode: "TC 00:00:12:00",
    name: "Pre-Production & Art Direction",
    duration: "Day 03 — 05",
    description:
      "Model casting, custom prop fabrication, fluid table test drips, and lighting schematics mapped out. Nothing is left to improvisation on shoot day.",
    deliverable: "Shot List, Moodboard & Talent Contracts",
  },
  {
    step: "03",
    timecode: "TC 00:01:45:00",
    name: "Soundstage Production & Shooting",
    duration: "Day 06 — 08",
    description:
      "Filmed in our Bahria Orchard soundstage with high-speed cinema sensors, anamorphic glass, macro probe lenses, and synchronized lighting cues.",
    deliverable: "Raw 4K Cinema DNG/ProRes Rushes",
  },
  {
    step: "04",
    timecode: "TC 00:04:10:00",
    name: "Post-Production, Color & Sound",
    duration: "Day 09 — 12",
    description:
      "Kinetic jump-cut pacing, customized foley/ASMR sound design, sub-bass mix, and cinema color grading in DaVinci Resolve for accurate skin tones and glossy product reflections.",
    deliverable: "Color Master Cuts & Kinetic Sound Stems",
  },
  {
    step: "05",
    timecode: "TC 00:06:00:00",
    name: "Ad Flighting & Multi-Variant Delivery",
    duration: "Day 13 — 15",
    description:
      "Final delivery in multiple aspect ratios (9:16 vertical, 16:9 hero, 1:1 square, 4:5 feed) with alternating 3-second hook variations ready for paid media upload.",
    deliverable: "Master 4K Package + Social Performance Variants",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Harmas Talha",
    role: "CEO & Creative Director",
    bio: "Pioneering high-velocity editorial cinematography in Pakistan. Directs flagship brand films and orchestrates creative strategy for scaling consumer brands.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    timecode: "TC 00:00:01:00",
  },
  {
    name: "Muhammad Affan Mavia",
    role: "CFO & Executive Producer",
    bio: "Architects commercial client operations, production financing, talent procurement, and soundstage infrastructure at Filma HQ in Bahria Orchard.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    timecode: "TC 00:00:02:00",
  },
  {
    name: "Saad Mir",
    role: "Director of Photography",
    bio: "Master of anamorphic lighting and tactile macro probe cinematography. Specializes in fluid table lighting and high-speed motion rigs.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    timecode: "TC 00:00:03:00",
  },
  {
    name: "Ayan Rauf",
    role: "Head of Sound Design & Foley",
    bio: "Engineers sensory ASMR audio, custom sub-bass drops, and tactile acoustic textures that stimulate immediate psychological cravings.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    timecode: "TC 00:00:04:00",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-black text-[#f5f5f5] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* 1. HEADER & MANIFESTO */}
        {/* ========================================================= */}
        <div className="border-b border-neutral-900 pb-16 mb-20">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-950 border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>Studio Identity & Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-sans tracking-tight text-white mb-8">
            <SplitText text="The Anti-Boring Commercial Studio." />
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
            <div className="lg:col-span-7">
              <p className="text-lg sm:text-xl text-neutral-200 font-sans leading-relaxed mb-6">
                Filma Studio was born in Lahore with a single conviction: modern
                digital advertising is suffocating under boring, predictable,
                low-effort templates.
              </p>
              <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Consumers scroll at lightning speed. Their thumb makes an
                intuitive, subconscious decision in 600 milliseconds to either
                flick away or stay. We combine editorial fashion-film aesthetics
                with ruthless direct-response performance science to ensure
                brands become impossible to scroll past.
              </p>
              <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Operating out of our dedicated soundstage in Bahria Orchard,
                Lahore, we build production workflows around cinema-grade glass,
                fluid dynamics, macro probe lenses, and SMPTE 24fps DaVinci
                color grading.
              </p>
            </div>

            <div className="lg:col-span-5">
              <TimecodeClock />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. TIMECODED PRODUCTION PROCESS BREAKDOWN */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-neutral-900 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
                Precision Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
                Timecoded Production Workflow
              </h2>
            </div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              SMPTE Synchronized · 15 Day Turnaround
            </div>
          </div>

          <div className="space-y-6">
            {TIMELINE_STEPS.map((step) => (
              <div
                key={step.step}
                className="group border border-neutral-800 bg-neutral-950/70 p-6 sm:p-8 hover:border-neutral-600 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Step & Timecode Column */}
                  <div className="lg:col-span-3 flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-white">
                        {step.step}
                      </span>
                      <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-400">
                        {step.timecode}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                      {step.duration}
                    </span>
                  </div>

                  {/* Description Column */}
                  <div className="lg:col-span-6">
                    <h3 className="text-xl font-bold font-sans text-white mb-2 group-hover:text-neutral-200">
                      {step.name}
                    </h3>
                    <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Output Deliverable */}
                  <div className="lg:col-span-3 lg:border-l lg:border-neutral-900 lg:pl-6 pt-4 lg:pt-0">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">
                      Key Milestone Deliverable:
                    </span>
                    <span className="font-mono text-xs text-neutral-200 font-medium">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. STUDIO LEADERSHIP & TEAM */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="pb-6 mb-12 border-b border-neutral-900">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
              Leadership & Craft
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
              Studio Directors & Producers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, mIdx) => (
              <div
                key={mIdx}
                className="group border border-neutral-900 bg-neutral-950 p-5 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 mb-5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 backdrop-blur-md border border-neutral-800 text-[9px] font-mono text-neutral-400">
                      {member.timecode}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-sans text-white mb-0.5">
                    {member.name}
                  </h3>
                  <div className="font-mono text-xs text-neutral-400 mb-3">
                    {member.role}
                  </div>
                  <p className="font-mono text-xs text-neutral-500 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-900 font-mono text-[10px] text-neutral-600 uppercase tracking-widest flex justify-between items-center">
                  <span>Filma Core</span>
                  <span>Lahore HQ</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. TECHNICAL RIG SPECIFICATIONS */}
        {/* ========================================================= */}
        <div className="border border-neutral-800 bg-neutral-950/70 p-8 sm:p-12 mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">
            Soundstage Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-6">
            Production Hardware & Color Grading Lab
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-neutral-800/80 font-mono text-xs">
            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>Optics & Cameras</span>
              </div>
              <ul className="space-y-2 text-neutral-400">
                <li>· 4K/6K Cinema Digital Sensors</li>
                <li>· Anamorphic 2.39:1 Flare Glass</li>
                <li>· Laowa 24mm f/14 Probe Lenses</li>
                <li>· 120fps Slow-Motion Capability</li>
              </ul>
            </div>

            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>Post & Color Grading</span>
              </div>
              <ul className="space-y-2 text-neutral-400">
                <li>· DaVinci Resolve Studio Color Suite</li>
                <li>· Calibrated EIZO 10-bit Reference Display</li>
                <li>· Kodak 2383 35mm Film Grain Profiling</li>
                <li>· ACES / Rec.709 Color Managed Pipeline</li>
              </ul>
            </div>

            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Studio Soundstage</span>
              </div>
              <ul className="space-y-2 text-neutral-400">
                <li>· Optical Fluid Dynamics Table</li>
                <li>· Motorized 360 Turntables</li>
                <li>· High-CRI DMX Grid Lighting</li>
                <li>· Dedicated Receiving & Storage Bay</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-12 border-t border-neutral-900">
          <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-4">
            Ready to upgrade your brand's creative tier?
          </h3>
          <p className="font-mono text-xs text-neutral-400 mb-8 max-w-md mx-auto">
            Book an instant package via our interactive pricing calculator or
            dispatch your brief on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <Link
              href="/pricing"
              data-curtain-title="PRODUCTION MATRIX"
              className="px-6 py-3.5 bg-[#b91c1c] text-white font-semibold uppercase tracking-wider hover:bg-[#dc2626] transition-colors"
            >
              Open Pricing Calculator →
            </Link>
            <Link
              href="/contact"
              data-curtain-title="COMMISSION BRIEF"
              className="px-6 py-3.5 border border-neutral-800 text-white uppercase tracking-wider hover:border-neutral-600 transition-colors"
            >
              Submit Client Brief
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

