"use client";

import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            {t.about.title}
          </h2>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
            {t.about.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {t.about.highlights.map((highlight) => (
              <Badge
                key={highlight}
                variant="secondary"
                className="px-4 py-2 text-sm font-normal"
              >
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
