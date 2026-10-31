"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkSection() {
  const { dict, language } = useLanguage();
  const work = dict.work;

  return (
    <section id="work" className="py-24 border-t border-zinc-100 bg-[#fafafa]/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Section Title exactly like Olaolu /work. */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316] mb-3">
            {work.title}
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-lg mx-auto">
            {work.subtitle}
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-6 sm:gap-8">
          {/* Card 1: FuRi Valentine Batik */}
          <div className="group bg-white rounded-2xl border border-zinc-200/70 overflow-hidden hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 flex flex-col justify-between">
            {/* Top Showcase Area with Logo */}
            <div className="h-48 sm:h-56 bg-gradient-to-b from-zinc-50/80 to-white flex items-center justify-center p-8 border-b border-zinc-100">
              <div className="text-center">
                <span className="font-serif italic text-2xl sm:text-3xl font-bold tracking-tight text-amber-900 group-hover:scale-105 transition-transform inline-block">
                  Valentine Batik
                </span>
                <span className="block text-[11px] font-mono tracking-widest text-amber-700/80 uppercase mt-1">
                  Motif Khas Bekasi
                </span>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="p-6">
              <h3 className="font-bold text-[#121316] text-base mb-1">
                FuRi Valentine Batik
              </h3>
              <a
                href="https://valentinebatik.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#5e3bee] hover:underline"
              >
                <span>valentinebatik.pages.dev</span>
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Bisnis Kamu */}
          <div className="group bg-white rounded-2xl border border-dashed border-zinc-300 overflow-hidden hover:border-[#5e3bee]/50 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 flex flex-col justify-between">
            {/* Top Showcase Area */}
            <div className="h-48 sm:h-56 bg-zinc-50/50 flex flex-col items-center justify-center p-8 border-b border-zinc-100 text-center">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-700 group-hover:scale-105 transition-transform inline-block mb-1">
                {language === "id" ? "Bisnis Kamu" : "Your Business"}
              </span>
              <span className="text-xs text-zinc-400 font-mono tracking-wide">
                {language === "id"
                  ? "website pertama untuk bisnismu"
                  : "the first website for your business"}
              </span>
            </div>

            {/* Bottom Card Footer */}
            <div className="p-6">
              <h3 className="font-bold text-[#121316] text-base mb-1">
                {language === "id" ? "Bisnis Kamu" : "Your Business"}
              </h3>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#5e3bee] hover:underline"
              >
                <span>{language === "id" ? "Hubungi Studio Kami" : "Contact Our Studio"}</span>
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
