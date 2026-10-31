"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Workflow, Code2, Layers, Cpu, Cloud, Terminal } from "lucide-react";

export default function TechStack() {
  const { dict } = useLanguage();
  const workflow = dict.workflow;

  const stack = [
    { name: "Next.js", desc: "React Framework", icon: <Layers size={18} /> },
    { name: "Tailwind CSS", desc: "Modern Styling", icon: <Code2 size={18} /> },
    { name: "TypeScript", desc: "Type Safety", icon: <Terminal size={18} /> },
    { name: "Cloudflare Pages", desc: "Global Edge Hosting", icon: <Cloud size={18} /> },
  ];

  return (
    <section id="workflow" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
          <Workflow size={14} />
          <span>{workflow.sectionTag}</span>
        </div>

        {/* Section header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            {workflow.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            {workflow.subtitle}
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {workflow.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 mb-4 inline-block">
                  Langkah {step.number}
                </span>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Stack Bar */}
        <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/60">
          <span className="text-xs font-mono text-zinc-400 block mb-5">
            {workflow.toolsTitle}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stack.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3"
              >
                <div className="text-amber-400">{item.icon}</div>
                <div>
                  <div className="font-bold text-zinc-200 text-sm">
                    {item.name}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
