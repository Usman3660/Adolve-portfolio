"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Work", href: "/work", curtainTitle: "SELECTED WORK" },
  { name: "About", href: "/about", curtainTitle: "STUDIO MANIFESTO" },
  { name: "Pricing", href: "/pricing", curtainTitle: "PRODUCTION MATRIX" },
  { name: "Join Us", href: "/join-us", curtainTitle: "TALENT ROSTER" },
  { name: "Contact", href: "/contact", curtainTitle: "COMMISSION BRIEF" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/60 backdrop-blur-md transition-all border-b border-white/5">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            data-curtain-title="FILMA STUDIO"
            className="flex items-center tracking-tight py-2 px-1"
          >
            <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tighter text-white hover:text-neutral-300 transition-colors">
              FILMA
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 sm:gap-10 font-sans text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  data-curtain-title={link.curtainTitle}
                  className={`transition-colors duration-200 relative py-2 px-1.5 inline-block ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#dc2626]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Instagram & WhatsApp Icons matching the exact header */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Filma Studio on Instagram"
              className="text-white hover:text-[#dc2626] transition-colors p-1"
            >
              <svg
                className="w-5 h-5 stroke-current fill-none stroke-[1.75]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://wa.me/923190443003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="text-white hover:text-[#dc2626] transition-colors p-1"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.12.553 4.186 1.604 6.008L.062 24l6.146-1.613a11.98 11.98 0 0 0 5.823 1.506h.005c6.632 0 12.026-5.395 12.026-12.033 0-3.214-1.252-6.236-3.525-8.51A11.95 11.95 0 0 0 12.031 0zm0 22.022c-1.802 0-3.568-.484-5.114-1.401l-.367-.218-3.805.998 1.016-3.71-.239-.38a9.988 9.988 0 0 1-1.534-5.28c0-5.526 4.496-10.022 10.043-10.022 2.68 0 5.2 1.044 7.094 2.938a9.96 9.96 0 0 1 2.943 7.093c0 5.527-4.497 10.024-10.038 10.024zm5.502-7.518c-.302-.151-1.787-.882-2.064-.983-.277-.101-.479-.151-.681.151-.202.302-.782.983-.958 1.185-.176.202-.353.227-.655.076-.302-.151-1.275-.47-2.428-1.499-.898-.801-1.504-1.79-1.68-2.093-.177-.302-.019-.465.132-.616.136-.136.302-.353.454-.529.151-.177.202-.303.302-.505.101-.202.051-.378-.025-.529-.076-.151-.681-1.641-.933-2.246-.245-.59-.494-.51-.681-.52-.176-.008-.378-.01-.58-.01-.202 0-.529.076-.806.378-.277.302-1.059 1.034-1.059 2.522 0 1.488 1.084 2.926 1.235 3.128.151.202 2.133 3.256 5.168 4.568.722.313 1.286.499 1.725.639.725.23 1.385.198 1.906.12.58-.087 1.787-.73 2.039-1.436.252-.705.252-1.31.176-1.436-.075-.126-.277-.202-.579-.353z" />
              </svg>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#dc2626] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col pt-28 px-8 md:hidden">
          <div className="flex flex-col gap-6 font-sans text-2xl font-bold uppercase tracking-tight">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                data-curtain-title={link.curtainTitle}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-900 text-white hover:text-[#dc2626] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-10 pt-6 text-neutral-500 font-mono text-xs flex justify-between items-center border-t border-neutral-900">
            <span>FILMA STUDIO · LAHORE</span>
            <a
              href="https://wa.me/923190443003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#dc2626]"
            >
              +92 319 044 3003
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
