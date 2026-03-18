"use client";

import { useLanguage } from "@/lib/language-context";

type SkillBarProps = {
  label: string;
  value: number;
};

function SkillBar({ label, value }: SkillBarProps) {
  const level =
    value >= 90
      ? "Fluente"
      : value >= 70
      ? "Avançado"
      : value >= 50
      ? "Intermediário"
      : "Básico";

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-xs font-mono text-primary/80">{value}%</span>
      </div>
      <div
        className="h-1.5 w-full rounded-full bg-border/60 overflow-hidden"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${value}% — ${level}`}
      >
        <div
          className="h-full rounded-full bg-primary/70 transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function Languages() {
  const { t } = useLanguage();

  return (
    <section id="languages" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-12">
          {t.languages.title}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {t.languages.items.map((lang, index) => (
            <div
              key={index}
              className="rounded-lg border border-border/40 bg-card/50 p-6 hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" role="img" aria-label={lang.language}>
                  {lang.flag}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {lang.language}
                  </h3>
                  {lang.native && lang.nativeLabel && (
                    <span className="text-xs text-primary/80 font-medium">
                      {lang.nativeLabel}
                    </span>
                  )}
                </div>
              </div>

              {lang.native ? (
                <div className="flex flex-col gap-1.5">
                  {(
                    ["grammar", "reading", "listening", "speaking"] as const
                  ).map((key) => (
                    <div key={key} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {t.languages.levels[key]}
                        </span>
                        <span className="text-xs font-mono text-primary/80">
                          100%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-border/60 overflow-hidden">
                        <div className="h-full w-full rounded-full bg-primary/70" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                lang.skills && (
                  <div className="flex flex-col gap-3">
                    {(
                      ["grammar", "reading", "listening", "speaking"] as const
                    ).map((key) => (
                      <SkillBar
                        key={key}
                        label={t.languages.levels[key]}
                        value={lang.skills![key]}
                      />
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
