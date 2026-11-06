"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Film } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 bg-black text-[#f5f5f5] text-center">
      <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-2">
        <Film className="w-4 h-4 text-neutral-400" />
        <span>SMPTE Error 00:04:04:00 · Reel Missing</span>
      </div>

      <h1 className="text-6xl sm:text-8xl font-bold font-sans tracking-tight text-white mb-6">
        404
      </h1>

      <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-md mb-8 leading-relaxed">
        The commercial campaign or scene you requested does not exist in the
        studio archives or has been archived.
      </p>

      <div className="flex items-center gap-4 font-mono text-xs">
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Studio Home</span>
        </Link>

        <Link
          href="/work"
          className="px-6 py-3 border border-neutral-800 text-white uppercase tracking-wider hover:border-neutral-600 transition-colors"
        >
          View Work Archives
        </Link>
      </div>
    </div>
  );
}

