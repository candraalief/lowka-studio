"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-orange-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Eyebrow / Intro tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-8 backdrop-blur-sm">
          <Sparkles size={14} className="text-amber-400" />
          <span>{dict.hero.eyebrow}</span>
        </div>

        {/* Big Bold Headline (Olaolu style) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.08] mb-8 max-w-4xl">
          {dict.hero.headlinePart1}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            {dict.hero.headlineHighlight}
          </span>
          {dict.hero.headlinePart2}
        </h1>

        {/* Subtitle / Narrative */}
        <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mb-10">
          {dict.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm tracking-tight transition-all shadow-md hover:shadow-amber-400/20 active:scale-95"
          >
            <span>{dict.hero.ctaWork}</span>
            <ArrowDown size={16} />
          </a>

          <a
            href="https://wa.me/6285866140707?text=Halo%20Candra%2C%20saya%20tertarik%20bikin%20website%20untuk%20usaha%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-sm transition-all hover:border-zinc-700 active:scale-95"
          >
            <MessageCircle size={17} className="text-emerald-400" />
            <span>{dict.hero.ctaTalk}</span>
          </a>
        </div>

        {/* Quick Trust Highlights */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Tanpa Biaya Server Mahal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Skor Performa 95+ (Kencang di HP)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Langsung Terkoneksi ke WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
