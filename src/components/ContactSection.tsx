"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { dict } = useLanguage();
  const contact = dict.contact;

  return (
    <footer id="contact" className="py-20 md:py-28 border-t border-zinc-100 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Say Hello text & email/WA */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-4">
              {contact.heading}
            </span>
            <ul className="space-y-3 text-lg font-medium">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#121316] hover:text-[#5e3bee] transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285866140707?text=Halo%20LowKa%20Studio%2C%20saya%20tertarik%20bikin%20website%20untuk%20usaha%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5e3bee] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>{contact.whatsapp}</span>
                  <svg
                    className="w-4 h-4"
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
              </li>
            </ul>
          </div>

          {/* Socials / Repo */}
          <div className="flex flex-col md:items-end">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-4">
              Connect
            </span>
            <div className="flex items-center gap-6 text-sm font-semibold text-zinc-600">
              <a
                href="https://github.com/candraalief/lowka-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5e3bee] transition-colors"
              >
                GH
              </a>
              <a
                href="https://wa.me/6285866140707"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5e3bee] transition-colors"
              >
                WA
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-[#5e3bee] transition-colors"
              >
                EM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono">
          <p>{contact.copyright}</p>
          <p className="mt-2 sm:mt-0">Built for speed, simplicity, and low cost.</p>
        </div>
      </div>
    </footer>
  );
}
