"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowUpRight, HelpCircle, ShieldCheck, Zap } from "lucide-react";
import { PricingCalculator } from "@/components/PricingCalculator";
import { SplitText } from "@/components/SplitText";

const FAQS = [
  {
    q: "Can we send products from Karachi, Islamabad, or internationally?",
    a: "Yes. Over 65% of our clients ship their products to our Bahria Orchard studio receiving bay via courier (TCS, Leopard, DHL). Once products arrive, we inspect, steam/prep, and confirm the shoot schedule immediately.",
  },
  {
    q: "Do you provide models, talent casting, and professional styling?",
    a: "Yes. When you select 'With a Model' in the calculator, we handle full talent casting, styling, wardrobe direction, and on-set hair/makeup suited to your brand's demographic.",
  },
  {
    q: "How does the Monthly Retainer work with the 10% discount?",
    a: "Retainers guarantee priority shoot days each month. We refresh your creatives continuously with fresh hook variants, mitigating ad fatigue and keeping your Meta/TikTok ROAS high. You save an extra 10% automatically.",
  },
  {
    q: "How are revision rounds handled?",
    a: "Every tier includes structured revision rounds for cuts, pacing, copy callouts, and color grade adjustments. Revisions are turned around within 24 to 48 hours via Frame.io or timestamped video reviews.",
  },
  {
    q: "What camera glass and resolution will our final assets be delivered in?",
    a: "All master films and product stills are delivered in uncompressed 4K UHD and ultra-high-resolution TIFF/JPEG, ready for billboards, Shopify 4K displays, and 9:16 mobile feeds.",
  },
];

export default function PricingPage() {
  return (
    <div className="w-full bg-black text-[#f5f5f5] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching exact reference */}
        <div className="border-b border-neutral-900 pb-12 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#dc2626] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
            <span>05 · TRANSPARENT COMMERCIAL INVESTMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-sans tracking-tight text-white mb-6">
            Interactive Production Estimator.
          </h1>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Configure your deliverables in real-time. Calculate production
            investment, model casting, and retainer discounts with instant
            one-click WhatsApp booking.
          </p>
        </div>

        {/* Dynamic Interactive Pricing Calculator */}
        <div className="mb-24">
          <PricingCalculator />
        </div>

        {/* Retainer Perks Breakdown */}
        <div className="border border-neutral-800 bg-neutral-950/70 p-8 sm:p-12 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-neutral-800 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span>Continuous Velocity</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">
                Why Top E-Commerce Brands Choose Retainers
              </h2>
            </div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Extra 10% Off Every Month
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-2">
                01 · Zero Ad Fatigue
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Paid media platforms punish stale creatives. Retainer partners
                receive a fresh batch of 3-second hook variations every 30 days
                to sustain peak ROAS.
              </p>
            </div>

            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-2">
                02 · Priority Soundstage Queue
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Locked-in shooting calendar days every single month at our Bahria
                Orchard studio. Jump the queue ahead of one-off projects.
              </p>
            </div>

            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-2">
                03 · Dedicated Creative Director
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Direct WhatsApp and Slack access to our directors. We monitor
                your ad account performance metrics and calibrate the next
                shoot accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="pb-6 mb-8 border-b border-neutral-900">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
              Clarity & Terms
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="border border-neutral-900 bg-neutral-950/50 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold font-sans text-white mb-3">
                    {faq.q}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-900/80 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
                  Filma Studio Policy
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Project Brief CTA */}
        <div className="border border-neutral-800 bg-neutral-950 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-3">
            Have a custom enterprise or multi-city requirement?
          </h3>
          <p className="font-mono text-xs text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            We regularly handle complex multi-day brand films, celebrity
            endorsements, and 30+ SKU e-commerce catalog shoots.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <a
              href="https://wa.me/923190443003?text=Hi%20Filma%20Studio%2C%20I%20have%20a%20custom%20enterprise%20production%20brief."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white text-black font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Custom Scope on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="px-6 py-3.5 border border-neutral-800 text-white uppercase tracking-wider hover:border-neutral-600 transition-colors"
            >
              Submit Detailed Brief Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

