"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fbfbfd] text-[#121316] font-sans antialiased selection:bg-[#5e3bee] selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <WorkSection />
        </main>
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}
