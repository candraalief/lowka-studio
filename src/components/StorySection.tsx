"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Lightbulb, HelpCircle, Gamepad2, GraduationCap } from "lucide-react";

export default function StorySection() {
  const { dict } = useLanguage();

  return (
    <section id="story" className="py-24 border-t border-zinc-800/80 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
          <Lightbulb size={14} />
          <span>{dict.story.sectionTag}</span>
        </div>

        {/* Section title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-14">
          {dict.story.title}
        </h2>

        {/* Brand Origin Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Box 1: Low-Cost to Low-Ko */}
          <div className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 font-mono font-bold text-lg flex items-center justify-center mb-5 border border-amber-400/20">
              01
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-3 flex items-center gap-2">
              <span>{dict.story.question1}</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {dict.story.answer1}
            </p>
          </div>

          {/* Box 2: 'O' to 'A' (The First Step) */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-900/40 border border-amber-500/20 hover:border-amber-500/40 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-zinc-950 font-mono font-bold text-lg flex items-center justify-center mb-5 shadow-sm">
              A
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-3">
              {dict.story.question2}
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {dict.story.answer2}
            </p>
          </div>
        </div>

        {/* Narrative & Reality */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-100 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{dict.story.missionTitle}</span>
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {dict.story.missionBody}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-zinc-300 font-bold text-sm mb-3">
                <GraduationCap size={18} className="text-amber-400" />
                <span>{dict.story.personalTitle}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {dict.story.personalBody}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-800/60">
              <Gamepad2 size={15} className="text-amber-400" />
              <span>Gamedev & Efficient Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
