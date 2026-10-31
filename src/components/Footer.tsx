"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Mail, ArrowUp } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Footer() {
  const { dict } = useLanguage();
  const contact = dict.contact;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-24 pb-16 border-t border-zinc-800/80 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Main CTA Section */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-900/60 border border-zinc-800 p-8 sm:p-14 mb-16 relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-3">
              {contact.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4 leading-tight">
              {contact.title}
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mb-8 leading-relaxed">
              {contact.subtitle}
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/6285866140707?text=Halo%20Candra%2C%20mau%20tanya-tanya%20bikin%20website%20LowKa%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm tracking-tight transition-all shadow-md active:scale-95"
              >
                <MessageCircle size={17} />
                <span>{contact.waButton}</span>
              </a>

              <a
                href="mailto:candraaliefp@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-semibold text-sm transition-all active:scale-95"
              >
                <Mail size={16} />
                <span>{contact.emailButton}</span>
              </a>

              <a
                href="https://github.com/candraalief"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-mono text-xs transition-all active:scale-95"
              >
                <GithubIcon className="w-4 h-4 text-zinc-300" />
                <span>candraalief</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>{contact.footerNote}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
