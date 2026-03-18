"use client";

import { useLanguage } from "@/lib/language-context";
import { Award, ExternalLink } from "lucide-react";

export function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-12">
          {t.certificates.title}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.certificates.items.map((cert, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-3 rounded-lg border border-border/40 bg-card/50 p-5 hover:border-primary/40 hover:bg-card transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/30">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Ver credencial: ${cert.title}`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-foreground leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>

              <span className="mt-auto text-xs text-primary/80 font-mono">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
