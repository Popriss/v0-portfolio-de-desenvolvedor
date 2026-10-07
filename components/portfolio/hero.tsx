"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowDown } from "lucide-react";
import Link from "next/link";
import { HeroGargantua } from "./hero-gargantua";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gargantua Black Hole Background (Hero Section Only) */}
      <HeroGargantua />
      
      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-black/60 backdrop-blur-md text-xs text-amber-200 mb-6 shadow-lg shadow-black/50">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
            <span>Gargantua · Interativo</span>
          </div>

          <p className="text-sm uppercase tracking-[0.25em] text-white/80 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            {t.hero.greeting}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {t.hero.name}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-4 font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {t.hero.role}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-white/75 mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{t.hero.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="#projects">{t.hero.cta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-medium"
            >
              <Link href="#contact">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}
