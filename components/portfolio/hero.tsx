"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle translucent atmospheric depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/60 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-background/40 backdrop-blur-md text-xs text-primary/90 mb-6 shadow-lg shadow-primary/5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span>Gargantua · Gravidade Interativa</span>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground/90 mb-4 drop-shadow-sm">
            {t.hero.greeting}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance drop-shadow-md">
            {t.hero.name}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light">
            {t.hero.role}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
            <MapPin className="h-4 w-4" />
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
