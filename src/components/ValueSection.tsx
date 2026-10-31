"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, CheckCircle2, Zap, DollarSign, MessageSquare } from "lucide-react";

export default function ValueSection() {
  const { dict } = useLanguage();

  const icons = [
    <CheckCircle2 key="check" size={24} className="text-amber-400" />,
    <Zap key="zap" size={24} className="text-amber-400" />,
    <MessageSquare key="msg" size={24} className="text-amber-400" />,
  ];

  return (
    <section id="values" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
          <Compass size={14} />
          <span>{dict.values.sectionTag}</span>
        </div>

        {/* Section header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            {dict.values.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            {dict.values.subtitle}
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {dict.values.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="font-mono text-sm text-zinc-400">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
