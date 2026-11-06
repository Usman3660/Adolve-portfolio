"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SplitText } from "@/components/SplitText";
import { TimecodeClock } from "@/components/TimecodeClock";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    clientName: "",
    email: "",
    phone: "",
    category: "E-Commerce",
    budget: "Rs 100,000 – 250,000",
    timeline: "Within 2 Weeks",
    services: ["Commercial Video Ads"] as string[],
    brief: "",
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppRedirect = () => {
    const summary = `Hi Filma Studio, I submitted a project brief.
· Brand: ${formData.brandName || "N/A"}
· Contact: ${formData.clientName || "N/A"} (${formData.phone})
· Category: ${formData.category}
· Services: ${formData.services.join(", ") || "General Production"}
· Budget: ${formData.budget}
· Timeline: ${formData.timeline}
· Notes: ${formData.brief || "Let's discuss shoot availability."}`;

    return `https://wa.me/923190443003?text=${encodeURIComponent(summary)}`;
  };

  return (
    <div className="w-full bg-black text-[#f5f5f5] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-neutral-900 pb-12 mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-950 border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct Client Portal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-white mb-6">
            <SplitText text="Commission a Campaign." />
          </h1>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Fill out the production brief below or contact our executive
            directors directly on WhatsApp. We typically confirm shoot dates
            within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Channels & Clock */}
          <div className="lg:col-span-5 space-y-6">
            <TimecodeClock />

            {/* Direct Contact Cards */}
            <div className="border border-neutral-800 bg-neutral-950/70 p-6 space-y-6 font-mono text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
                  Direct WhatsApp Hotline (Priority)
                </span>
                <a
                  href="https://wa.me/923190443003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-white hover:text-neutral-300 flex items-center justify-between"
                >
                  <span>+92 319 044 3003</span>
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </a>
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  Harmas Talha · Creative Director
                </span>
              </div>

              <div className="pt-4 border-t border-neutral-900">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
                  Executive Production & Billing
                </span>
                <a
                  href="mailto:contact@filmastudio.com"
                  className="text-white hover:underline flex items-center justify-between"
                >
                  <span>contact@filmastudio.com</span>
                  <Mail className="w-4 h-4 text-neutral-400" />
                </a>
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  Muhammad Affan Mavia · CFO & Producer
                </span>
              </div>

              <div className="pt-4 border-t border-neutral-900">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
                  Physical Studio & Soundstage
                </span>
                <div className="text-neutral-300 leading-relaxed">
                  Studio 4B, Phase 1, Commercial District, Bahria Orchard,
                  Raiwind Road, Lahore, Punjab 54000, Pakistan.
                </div>
                <div className="mt-2 text-[10px] text-neutral-500">
                  Products delivered via TCS, Leopards, or DHL to receiving bay.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Client Brief Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-neutral-800 bg-neutral-950 p-8 sm:p-12 text-center">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-sans text-white mb-3">
                  Production Brief Received
                </h3>
                <p className="font-mono text-xs text-neutral-400 max-w-md mx-auto leading-relaxed mb-8">
                  Our directors have logged your brief in Bahria Orchard. For
                  immediate priority queue scheduling, launch your brief directly
                  into our WhatsApp desk.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs">
                  <a
                    href={generateWhatsAppRedirect()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-white text-black font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm via WhatsApp Desk →</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3.5 border border-neutral-800 text-neutral-400 hover:text-white uppercase tracking-wider transition-colors"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-neutral-800 bg-neutral-950/70 p-6 sm:p-10 space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold font-sans text-white mb-1">
                    Project Diagnostic Brief
                  </h3>
                  <p className="font-mono text-xs text-neutral-500">
                    All fields strictly confidential under studio NDA.
                  </p>
                </div>

                {/* Brand & Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Brand / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Zero Lifestyle, PheraLab"
                      value={formData.brandName}
                      onChange={(e) =>
                        setFormData({ ...formData, brandName: e.target.value })
                      }
                      className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name & Title"
                      value={formData.clientName}
                      onChange={(e) =>
                        setFormData({ ...formData, clientName: e.target.value })
                      }
                      className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@brand.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      WhatsApp / Phone Number *
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

                {/* Services Checkboxes */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
                    Services Needed (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Commercial Video Ads",
                      "Macro Product Shoots",
                      "Amazon A+ Visuals",
                      "Food ASMR & Restaurant Reels",
                      "DaVinci Color Grading",
                      "Monthly Growth Retainer",
                    ].map((svc) => {
                      const isSelected = formData.services.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`py-2.5 px-3.5 text-left font-mono text-xs flex items-center justify-between border transition-all duration-150 ${
                            isSelected
                              ? "border-white bg-white/10 text-white"
                              : "border-neutral-800 bg-black text-neutral-400 hover:border-neutral-700"
                          }`}
                        >
                          <span>{svc}</span>
                          {isSelected && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Category & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Brand Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-white"
                    >
                      <option value="E-Commerce">E-Commerce & DTC</option>
                      <option value="Food & Restaurant">
                        Food & Restaurant
                      </option>
                      <option value="Fashion & Apparel">
                        Fashion & Streetwear
                      </option>
                      <option value="Tech & Wearables">
                        Tech & Wearables
                      </option>
                      <option value="Cosmetics & Skincare">
                        Cosmetics & Skincare
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Estimated Production Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-white"
                    >
                      <option value="Rs 50,000 – 100,000">
                        Rs 50,000 – 100,000 (Starter)
                      </option>
                      <option value="Rs 100,000 – 250,000">
                        Rs 100,000 – 250,000 (Growth)
                      </option>
                      <option value="Rs 250,000 – 500,000">
                        Rs 250,000 – 500,000 (Scale)
                      </option>
                      <option value="Rs 500,000+">
                        Rs 500,000+ (Flagship / Retainer)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Project Brief Notes */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Campaign Scope & Objectives
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the products, target audience, any reference visual styles, and expected delivery date..."
                    value={formData.brief}
                    onChange={(e) =>
                      setFormData({ ...formData, brief: e.target.value })
                    }
                    className="w-full bg-black border border-neutral-800 p-4 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Transmit Production Brief →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

