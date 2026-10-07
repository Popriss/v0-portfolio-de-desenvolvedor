"use client";

import { LanguageProvider } from "@/lib/language-context";
import { CosmicStarfield } from "@/components/portfolio/cosmic-starfield";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Learning } from "@/components/portfolio/learning";
import { Languages } from "@/components/portfolio/languages";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-foreground relative selection:bg-primary/30">
        <CosmicStarfield />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Learning />
          <Languages />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
