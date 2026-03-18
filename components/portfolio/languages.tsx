"use client";

import { useLanguage } from "@/lib/language-context";

interface SkillLevel {
  grammar: number;
  reading: number;
  listening: number;
  speaking: number;
}

function LanguageCard({
  language,
  flag,
  native,
  nativeLabel,
  skills,
  levels,
}: {
  language: string;
  flag: string;
  native: boolean;
  nativeLabel?: string;
  skills: SkillLevel | null;
  levels: Record<string, string>;
}) {
  return (
    <div className="rounded-lg border border-border/40 bg-card/50 p-6 hover:border-primary/30 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{flag}</span>
        <div>
          <h3 className="text-sm font-semibold text-foreground">{language}</h3>
          {native && nativeLabel && (
            <p className="text-xs text-primary font-medium">{nativeLabel}</p>
          )}
        </div>
      </div>

      {native ? (
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(levels).map(([key, label]) => (
            <div key={key}>
              <p className="text-xs text-muted-foreground mb-2">{label}</p>
              <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <div className="h-full w-full bg-primary rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ) : skills ? (
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(levels).map(([key, label]) => {
            const skillKey = key as keyof SkillLevel;
            const percentage = skills[skillKey];
            return (
              <div key={key}>
                <p className="text-xs text-muted-foreground mb-2">{label}</p>
                <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{percentage}%</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function Languages() {
  const { t } = useLanguage();
  const data = t.languages;

  return (
    <section id="languages" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-12">
            {data.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {data.items.map((item, i) => (
              <LanguageCard
                key={i}
                language={item.language}
                flag={item.flag}
                native={item.native}
                nativeLabel={item.nativeLabel || undefined}
                skills={item.skills}
                levels={data.levels}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
