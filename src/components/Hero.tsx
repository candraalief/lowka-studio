"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { dict } = useLanguage();
  const hero = dict.hero;

  return (
    <section id="home" className="pt-8 pb-20 md:pt-14 md:pb-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Eyebrow: exactly like Olaolu "HEY, I'M OLAOLU" */}
        <p className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] text-zinc-400 uppercase mb-6">
          {hero.eyebrow}
        </p>

        {/* Lead Title with purple accent */}
        <h1 className="text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-[#121316] leading-[1.18] mb-10">
          {hero.leadTitle}
          <span className="text-[#5e3bee] font-bold">
            {hero.leadHighlight}
          </span>
        </h1>

        {/* 3 Clean Editorial Paragraphs */}
        <div className="space-y-6 text-[17px] sm:text-lg text-zinc-600 font-normal leading-[1.8] max-w-2xl mb-10">
          <p>{hero.p1}</p>
          <p>{hero.p2}</p>
          <p>{hero.p3}</p>
        </div>

        {/* Purple Contact Link with 45-degree arrow */}
        <div>
          <a
            href="https://wa.me/6285866140707?text=Halo%20LowKa%20Studio%2C%20saya%20ingin%20tanya%20pembuatan%20website%20untuk%20usaha%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#5e3bee] font-medium text-lg hover:underline transition-all"
          >
            <span>{hero.contactLink}</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
