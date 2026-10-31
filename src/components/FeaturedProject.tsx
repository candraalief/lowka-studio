"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FolderGit2, ExternalLink, Check, Sparkles } from "lucide-react";

export default function FeaturedProject() {
  const { dict } = useLanguage();
  const project = dict.projects;

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/80 bg-zinc-950/70">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
          <FolderGit2 size={14} />
          <span>{project.sectionTag}</span>
        </div>

        {/* Section header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            {project.subtitle}
          </p>
        </div>

        {/* Project Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-900/40 border border-zinc-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-medium mb-4">
                <Sparkles size={13} />
                <span>{project.firstProjectTag}</span>
              </div>

              {/* Title & Category */}
              <h3 className="text-2xl sm:text-4xl font-bold text-zinc-100 mb-2">
                {project.client}
              </h3>
              <p className="text-zinc-400 text-sm font-medium">
                {project.category}
              </p>
            </div>

            {/* Visit Live Link */}
            <a
              href="https://valentinebatik.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-sm tracking-tight transition-all self-start shadow-md hover:shadow-zinc-200/20 active:scale-95"
            >
              <span>{project.viewLive}</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-base leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Highlights checklist */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 pt-6 border-t border-zinc-800/80">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-zinc-800/80">
            <span className="text-xs font-mono text-zinc-400 mr-2">Stack:</span>
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-zinc-800/90 border border-zinc-700/80 text-zinc-300 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
