"use client";

import { useLanguage } from "@/lib/language-context";
import { socialLinks } from "@/lib/portfolio-data";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export function Learning() {
  const { t } = useLanguage();
  const data = t.learning;

  return (
    <section id="learning" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary">
            {data.title}
          </h2>

          {/* Formação Acadêmica */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-medium">
              {data.educationLabel}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.education.map((edu, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg border border-border/40 bg-card/50 p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/30">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-primary/80 font-mono mt-1">
                      {edu.period}{" "}
                      <span className="text-primary font-semibold">({edu.status})</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-medium">
              {data.certificatesLabel}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {data.certificates.map((cert, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 rounded-md border border-border/40 bg-card/50 px-4 py-3 hover:border-primary/40 hover:bg-card transition-all duration-200"
                >
                  <Award className="h-4 w-4 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground/90 truncate">{cert.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
                  </div>
                  {cert.credential && (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Ver credencial: ${cert.title}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Perfis de Aprendizado */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-medium">
              {data.profilesLabel}
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.profiles.map((profile, i) => (
                <a
                  key={i}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-border/40 bg-card/50 px-4 py-2.5 text-sm text-foreground/80 hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  {profile.name}
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
