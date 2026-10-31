"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-zinc-950 text-base shadow-sm group-hover:scale-105 transition-transform">
            LK
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-zinc-100 text-lg leading-tight flex items-center gap-1">
              LowKa <span className="text-amber-400 font-medium text-xs uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">Studio</span>
            </span>
            <span className="text-[11px] text-zinc-400 font-mono">
              {language === "id" ? "Solusi Website UMKM" : "Web Solutions for MSMEs"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a
            href="#story"
            className="hover:text-zinc-100 transition-colors"
          >
            {dict.nav.story}
          </a>
          <a
            href="#values"
            className="hover:text-zinc-100 transition-colors"
          >
            {dict.nav.value}
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-100 transition-colors"
          >
            {dict.nav.work}
          </a>
          <a
            href="#workflow"
            className="hover:text-zinc-100 transition-colors"
          >
            {dict.nav.workflow}
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-100 transition-colors"
          >
            {dict.nav.contact}
          </a>
        </nav>

        {/* Right side controls: Language switcher & Status */}
        <div className="flex items-center gap-3">
          {/* Availability badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{dict.nav.statusBadge}</span>
          </div>

          {/* Language Switcher Button */}
          <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
            <button
              onClick={() => setLanguage("id")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                language === "id"
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              aria-label="Switch to Indonesian"
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                language === "en"
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-5 flex flex-col gap-4 text-base font-medium text-zinc-300">
          <div className="flex items-center gap-2 pb-2 border-b border-zinc-800/80 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{dict.nav.statusBadge}</span>
          </div>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            {dict.nav.story}
          </a>
          <a
            href="#values"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            {dict.nav.value}
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            {dict.nav.work}
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            {dict.nav.workflow}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            {dict.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}
