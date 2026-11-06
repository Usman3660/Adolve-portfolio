"use client";

import React, { useEffect, useState } from "react";
import { getStudioStatus, StudioStatus } from "@/lib/timecode";

interface TimecodeClockProps {
  minimal?: boolean;
  className?: string;
}

export function TimecodeClock({ minimal = false, className = "" }: TimecodeClockProps) {
  const [status, setStatus] = useState<StudioStatus | null>(null);

  useEffect(() => {
    // Initial fetch
    setStatus(getStudioStatus());

    // Update every second
    const interval = setInterval(() => {
      setStatus(getStudioStatus());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className={`font-mono text-xs uppercase tracking-widest text-neutral-500 ${className}`}>
        TC --:--:-- PKT
      </div>
    );
  }

  if (minimal) {
    return (
      <div className={`inline-flex items-center gap-2 font-mono text-xs tracking-wider text-neutral-300 ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen
              ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse"
              : "bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
          }`}
        />
        <span className="text-neutral-400">{status.timeStr} PKT</span>
        <span className="hidden sm:inline text-neutral-600">·</span>
        <span className="hidden sm:inline text-neutral-500 text-[11px] uppercase tracking-wider">
          {status.isOpen ? "Studio Open" : "Studio Closed"}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`border border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md p-4 rounded-none font-mono text-xs ${className}`}
    >
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/60">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              status.isOpen
                ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"
                : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
            }`}
          />
          <span className="text-neutral-200 font-semibold tracking-wider uppercase text-[11px]">
            {status.isOpen ? "Studio Active Now" : "Studio Off-Hours"}
          </span>
        </div>
        <span className="text-neutral-500 text-[10px] tracking-widest">
          31.3275° N, 74.2084° E
        </span>
      </div>

      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-[10px] tracking-widest uppercase text-neutral-500 mb-0.5">
            Lahore, PKT (UTC+5)
          </div>
          <div className="text-2xl font-bold tracking-tight text-white tabular-nums">
            {status.timeStr}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-widest uppercase text-neutral-500 mb-0.5">
            Operational Hours
          </div>
          <div className="text-neutral-300 text-[11px]">
            Mon – Sat: 10:00 – 19:00
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-neutral-900 flex items-center justify-between text-[10px] text-neutral-500">
        <span>Bahria Orchard, Raiwind Rd, Lahore</span>
        <span className="text-neutral-400">Filma HQ</span>
      </div>
    </div>
  );
}

export default TimecodeClock;

