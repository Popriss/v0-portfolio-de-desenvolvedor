"use client";

import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-12">
            {t.experience.title}
          </h2>

          <div className="space-y-12">
            {t.experience.items.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 border-l border-border hover:border-primary/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-muted-foreground">{item.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
