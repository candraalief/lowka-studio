"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ValueSection from "@/components/ValueSection";
import FeaturedProject from "@/components/FeaturedProject";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-400 selection:text-zinc-950">
        <Navbar />
        <main>
          <Hero />
          <StorySection />
          <ValueSection />
          <FeaturedProject />
          <TechStack />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
