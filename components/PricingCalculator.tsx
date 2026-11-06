"use client";

import React, { useState } from "react";
import { Check, Sparkles, MessageSquare, ShieldCheck, Zap } from "lucide-react";

type ServiceNeed = "Video" | "Photography" | "Graphic Design";
type BrandCategory =
  | "E-commerce"
  | "Skincare"
  | "Makeup"
  | "Perfume"
  | "Fashion"
  | "Tech";
type ModelOption = "With model" | "Without model";
type FrequencyOption = "One-off" | "Every month for extra 10% off";

interface TierConfig {
  name: string;
  badge?: string;
  tagline: string;
  basePrice: number;
  modelFee: number;
  turnaround: string;
  revisions: string;
  features: string[];
}

const TIERS: TierConfig[] = [
  {
    name: "Starter",
    tagline: "Essential scroll-stopping proof of concept for new campaigns.",
    basePrice: 50000,
    modelFee: 15000,
    turnaround: "5 – 7 Business Days",
    revisions: "2 Rounds of Cuts",
    features: [
      "2x High-converting short-form cuts (9:16)",
      "High-speed cinematic studio shoot",
      "Color grading & DaVinci grain profile",
      "Hook optimization & trending sound mix",
      "Full commercial rights & 4K delivery",
    ],
  },
  {
    name: "Growth",
    badge: "MOST POPULAR",
    tagline: "Full creative asset suite engineered for scalable Meta & TikTok ROAS.",
    basePrice: 110500,
    modelFee: 25000,
    turnaround: "8 – 10 Business Days",
    revisions: "3 Rounds of Cuts",
    features: [
      "6x Dynamic hook variants (9:16 + 16:9)",
      "12x Retouched E-Commerce still packshots",
      "Macro lens & liquid/motion dynamics",
      "Custom kinetic typography & sound design",
      "A/B creative testing variants",
      "Priority production queue",
    ],
  },
  {
    name: "Scale",
    badge: "ENTERPRISE SUITE",
    tagline: "Full-scale commercial campaign production with multi-format ecosystem.",
    basePrice: 242000,
    modelFee: 45000,
    turnaround: "12 – 15 Business Days",
    revisions: "Unlimited during production window",
    features: [
      "1x Flagship Hero Brand Film (16:9 4K Cinema)",
      "14x High-velocity performance ad variants (9:16)",
      "30x Master studio e-commerce & lifestyle stills",
      "Full art direction, styling & set construction",
      "Raw DaVinci project archive + master stems",
      "Direct creative director Slack/WhatsApp channel",
    ],
  },
];

export function PricingCalculator() {
  const [need, setNeed] = useState<ServiceNeed>("Video");
  const [category, setCategory] = useState<BrandCategory>("E-commerce");
  const [model, setModel] = useState<ModelOption>("Without model");
  const [frequency, setFrequency] = useState<FrequencyOption>("One-off");

  // Multiplier logic
  const getServiceMultiplier = (val: ServiceNeed): number => {
    switch (val) {
      case "Video":
        return 1.0;
      case "Photography":
        return 0.85;
      case "Graphic Design":
        return 0.75;
    }
  };

  const getCategoryMultiplier = (val: BrandCategory): number => {
    switch (val) {
      case "E-commerce":
        return 1.0;
      case "Skincare":
        return 1.08;
      case "Makeup":
        return 1.08;
      case "Perfume":
        return 1.1;
      case "Fashion":
        return 1.12;
      case "Tech":
        return 1.06;
    }
  };

  const calculatePrice = (tier: TierConfig) => {
    const serviceMult = getServiceMultiplier(need);
    const categoryMult = getCategoryMultiplier(category);
    const rawPrice = tier.basePrice * serviceMult * categoryMult;
    const modelAdd = model === "With model" ? tier.modelFee : 0;
    const subtotal = rawPrice + modelAdd;

    // Retainer 10% discount
    const isRetainer = frequency === "Every month for extra 10% off";
    const finalPrice = isRetainer ? subtotal * 0.9 : subtotal;
    const savings = isRetainer ? subtotal * 0.1 : 0;

    return {
      finalPrice: Math.round(finalPrice / 500) * 500,
      originalPrice: Math.round(subtotal / 500) * 500,
      savings: Math.round(savings / 500) * 500,
      isRetainer,
    };
  };

  const formatPKR = (num: number) => {
    return `Rs ${num.toLocaleString()}`;
  };

  const generateWhatsAppUrl = (tierName: string, price: number) => {
    const summary = `Hi Filma Studio, I would like to book the ${tierName} package.
· What do you need?: ${need}
· Brand Category: ${category}
· Model: ${model}
· Frequency: ${frequency}
· Estimated Investment: ${formatPKR(price)}
Looking forward to discussing our shoot availability at the Bahria Orchard studio.`;

    return `https://wa.me/923190443003?text=${encodeURIComponent(summary)}`;
  };

  return (
    <div className="w-full">
      {/* 4-Step Selector Panel */}
      <div className="border border-neutral-800 bg-neutral-950/80 p-6 sm:p-8 mb-12">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b91c1c] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
              Interactive Production Cost Estimator
            </span>
          </div>
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
            Step 01 — 04
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 01: What do you need? */}
          <div>
            <label className="block font-mono text-xs tracking-widest uppercase text-neutral-400 mb-3">
              01 · What do you need?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["Video", "Photography", "Graphic Design"] as ServiceNeed[]).map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setNeed(item)}
                    className={`py-3 px-2 text-center text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                      need === item
                        ? "border-[#b91c1c] bg-[#b91c1c] text-white font-bold shadow-[0_0_15px_rgba(185,28,28,0.3)]"
                        : "border-neutral-800 bg-black/60 text-neutral-400 hover:border-neutral-700 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Step 02: Brand Category */}
          <div>
            <label className="block font-mono text-xs tracking-widest uppercase text-neutral-400 mb-3">
              02 · Brand Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  "E-commerce",
                  "Skincare",
                  "Makeup",
                  "Perfume",
                  "Fashion",
                  "Tech",
                ] as BrandCategory[]
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`py-3 px-2 text-center text-xs font-mono uppercase tracking-wider transition-all duration-200 border truncate ${
                    category === cat
                      ? "border-[#b91c1c] bg-[#b91c1c] text-white font-bold"
                      : "border-neutral-800 bg-black/60 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Step 03: With a model? */}
          <div>
            <label className="block font-mono text-xs tracking-widest uppercase text-neutral-400 mb-3">
              03 · With a model?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(["Without model", "With model"] as ModelOption[]).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setModel(opt)}
                  className={`py-3 px-4 text-center text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                    model === opt
                      ? "border-[#b91c1c] bg-[#b91c1c] text-white font-bold"
                      : "border-neutral-800 bg-black/60 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Step 04: How often? */}
          <div>
            <label className="block font-mono text-xs tracking-widest uppercase text-neutral-400 mb-3">
              04 · How often?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  "One-off",
                  "Every month for extra 10% off",
                ] as FrequencyOption[]
              ).map((freq) => (
                <button
                  key={freq}
                  type="button"
                  onClick={() => setFrequency(freq)}
                  className={`py-3 px-3 text-center text-xs font-mono uppercase tracking-wider transition-all duration-200 border relative ${
                    frequency === freq
                      ? "border-[#b91c1c] bg-[#b91c1c] text-white font-bold"
                      : "border-neutral-800 bg-black/60 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {freq === "Every month for extra 10% off" ? (
                    <div>
                      <span>Every month</span>
                      <span className="block text-[9px] text-white/90 font-normal">
                        -10% Discount
                      </span>
                    </div>
                  ) : (
                    freq
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Dynamic Tier Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {TIERS.map((tier) => {
          const { finalPrice, originalPrice, savings, isRetainer } = calculatePrice(tier);
          const isGrowth = tier.name === "Growth";
          const whatsAppUrl = generateWhatsAppUrl(tier.name, finalPrice);

          return (
            <div
              key={tier.name}
              className={`relative flex flex-col justify-between border transition-all duration-300 p-6 sm:p-8 ${
                isGrowth
                  ? "border-[#b91c1c] bg-neutral-950 shadow-[0_0_40px_rgba(185,28,28,0.15)]"
                  : "border-neutral-800/90 bg-neutral-950/60 hover:border-neutral-700"
              }`}
            >
              {/* Badge if Growth or Scale */}
              {tier.badge && (
                <div
                  className={`absolute -top-3 left-6 px-3 py-0.5 font-mono text-[10px] uppercase font-bold tracking-widest shadow-md ${
                    isGrowth
                      ? "bg-[#b91c1c] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-mono text-xl uppercase tracking-wider text-white font-bold">
                    {tier.name}
                  </h3>
                  <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                    {tier.turnaround}
                  </span>
                </div>

                <p className="text-neutral-400 text-xs leading-relaxed mb-6 min-h-[36px]">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-neutral-800/80">
                  <div className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest mb-1">
                    Estimated Production Budget
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      {formatPKR(finalPrice)}
                    </span>
                    {isRetainer && (
                      <span className="font-mono text-xs text-neutral-500 line-through">
                        {formatPKR(originalPrice)}
                      </span>
                    )}
                  </div>

                  {isRetainer && savings > 0 && (
                    <div className="mt-2 font-mono text-[11px] text-[#dc2626] flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Saving {formatPKR(savings)} / month with retainer
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                    <span>Revisions:</span>
                    <span className="text-neutral-200">{tier.revisions}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    Deliverables & Inclusions:
                  </div>
                  {tier.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs text-neutral-300"
                    >
                      <Check className="w-3.5 h-3.5 text-[#b91c1c] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic WhatsApp CTA Button */}
              <div>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-200 group ${
                    isGrowth
                      ? "bg-[#b91c1c] hover:bg-[#991b1b] text-white shadow-lg"
                      : "bg-neutral-900 border border-neutral-700 text-white hover:border-[#b91c1c] hover:bg-neutral-800"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book on WhatsApp →</span>
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-mono text-neutral-500">
                  <ShieldCheck className="w-3 h-3 text-neutral-400" />
                  <span>No upfront obligation · 24hr response</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingCalculator;
