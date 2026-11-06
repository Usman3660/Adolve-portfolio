"use client";

import React, { useState } from "react";
import { CheckCircle2, Film, Sparkles, Send, ArrowUpRight } from "lucide-react";
import { SplitText } from "@/components/SplitText";

const ROLES = [
  {
    title: "Commercial Video Editor",
    type: "Full-Time / On-Set / Hybrid",
    description:
      "Master of kinetic jump cuts, 9:16 vertical pacing, audio ducking, and rhythmic retention mechanics. Experience with Premiere Pro and DaVinci Resolve.",
  },
  {
    title: "Cinematographer & Camera Op",
    type: "Studio Soundstage · Lahore",
    description:
      "Expertise with anamorphic glass, macro probe lenses, high-speed 120fps motion rigs, and fluid table lighting in Bahria Orchard soundstage.",
  },
  {
    title: "DaVinci Resolve Colorist",
    type: "Project-Based / In-House",
    description:
      "ACES color managed workflow, Kodak 2383 35mm grain emulation, exact cosmetic skin tone fidelity, and commercial packshot cleanup.",
  },
  {
    title: "Kinetic Sound Designer & Foley Artist",
    type: "Remote / Lahore",
    description:
      "Crafting bone-rattling sub-bass drops, crisp food crunch ASMR, tactile fluid drips, and commercial audio polish.",
  },
];

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Commercial Video Editor",
    portfolioUrl: "",
    instagramOrShowreel: "",
    bio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-black text-[#f5f5f5] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-neutral-900 pb-12 mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-950 border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>Studio Talent Roster</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-white mb-6">
            <SplitText text="Join the Soundstage Roster." />
          </h1>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
            We are always scouting ambitious editors, cinematographers,
            colorists, and sound designers in Lahore and across Pakistan who
            obsess over visual perfection.
          </p>
        </div>

        {/* Roles List */}
        <div className="mb-20">
          <div className="pb-6 mb-8 border-b border-neutral-900">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
              Active Call
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">
              Open Creative Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROLES.map((r, idx) => (
              <div
                key={idx}
                className="border border-neutral-900 bg-neutral-950/60 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-900 font-mono text-[11px]">
                    <span className="text-neutral-500 uppercase tracking-widest">
                      Position {idx + 1}
                    </span>
                    <span className="text-white">{r.type}</span>
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white mb-3">
                    {r.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 font-mono text-[10px] text-neutral-500 uppercase tracking-widest flex items-center justify-between">
                  <span>Filma Soundstage</span>
                  <span className="text-emerald-400">Accepting Showreels</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Onboarding Form */}
        <div className="max-w-3xl mx-auto border border-neutral-800 bg-neutral-950/80 p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-sans text-white mb-2">
                Showreel Received
              </h3>
              <p className="font-mono text-xs text-neutral-400 max-w-md mx-auto leading-relaxed mb-6">
                Our creative directors review submissions weekly. If your work
                matches an upcoming commercial flight, we will reach out via
                WhatsApp.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 border border-neutral-800 font-mono text-xs uppercase tracking-wider text-white hover:border-neutral-600 transition-colors"
              >
                Submit Another Link
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-sans text-white mb-1">
                  Creator Application Form
                </h3>
                <p className="font-mono text-xs text-neutral-500">
                  Please provide direct portfolio, Behance, Google Drive, or
                  Vimeo showreel links.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Primary Role *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-white"
                  >
                    <option value="Commercial Video Editor">
                      Commercial Video Editor
                    </option>
                    <option value="Cinematographer & Camera Op">
                      Cinematographer & Camera Op
                    </option>
                    <option value="DaVinci Resolve Colorist">
                      DaVinci Resolve Colorist
                    </option>
                    <option value="Kinetic Sound Designer & Foley">
                      Kinetic Sound Designer & Foley
                    </option>
                    <option value="Product Stylist & Set Designer">
                      Product Stylist & Set Designer
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Portfolio / Google Drive / Vimeo Showreel Link *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://vimeo.com/... or Google Drive folder"
                  value={formData.portfolioUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, portfolioUrl: e.target.value })
                  }
                  className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Instagram / Behance / LinkedIn (Optional)
                </label>
                <input
                  type="text"
                  placeholder="@handle or profile link"
                  value={formData.instagramOrShowreel}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      instagramOrShowreel: e.target.value,
                    })
                  }
                  className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Brief Introduction & Key Software/Gear
                </label>
                <textarea
                  rows={3}
                  placeholder="What software or cameras do you operate? What kind of commercial cuts are you most proud of?"
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  className="w-full bg-black border border-neutral-800 p-4 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Showreel for Review</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

