"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, dict } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-8 md:py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Logo: lowka in custom bold lowercase with purple drip/dot */}
        <a href="#home" className="group flex items-center">
          <span className="text-3xl font-bold tracking-tight text-[#121316]">
            lowka<span className="text-[#5e3bee]">.</span>
          </span>
        </a>

        {/* Right controls: Language Switcher & Minimal Menu Toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Subtle Language Switcher */}
          <div className="flex items-center text-xs font-mono font-medium tracking-wider text-zinc-400">
            <button
              onClick={() => setLanguage("id")}
              className={`transition-colors ${
                language === "id"
                  ? "text-[#5e3bee] font-bold"
                  : "hover:text-zinc-700"
              }`}
            >
              ID
            </button>
            <span className="mx-1.5 text-zinc-300">/</span>
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors ${
                language === "en"
                  ? "text-[#5e3bee] font-bold"
                  : "hover:text-zinc-700"
              }`}
            >
              EN
            </button>
          </div>

          {/* Olaolu-style minimal two-line menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer group"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] bg-[#5e3bee] rounded-full transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`h-[2px] bg-[#5e3bee] rounded-full transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-0" : "w-4 self-end group-hover:w-6"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Slide-down simple menu */}
      {menuOpen && (
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-4 pb-6 border-b border-zinc-100 flex flex-col sm:flex-row gap-6 sm:gap-10 text-base font-medium text-zinc-600 animate-in fade-in duration-200">
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#5e3bee] transition-colors"
          >
            {dict.nav.work}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#5e3bee] transition-colors"
          >
            {dict.nav.sayHello}
          </a>
          <a
            href="https://wa.me/6285866140707"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-[#5e3bee] hover:underline"
          >
            WhatsApp ↗
          </a>
        </div>
      )}
    </header>
  );
}
