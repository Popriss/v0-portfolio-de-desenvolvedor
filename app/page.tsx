"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Certificates } from "@/components/portfolio/certificates";
import { Languages } from "@/components/portfolio/languages";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certificates />
          <Languages />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
