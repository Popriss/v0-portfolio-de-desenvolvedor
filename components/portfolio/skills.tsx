"use client";

import { useLanguage } from "@/lib/language-context";

function TechBadge({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-border/40 bg-card/60 px-3 py-2 hover:border-primary/40 hover:bg-card transition-all duration-200 cursor-default">
      <img
        src={`https://cdn.simpleicons.org/${icon}/${color.replace("#", "")}`}
        alt={name}
        width={16}
        height={16}
        className="shrink-0"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="text-sm text-foreground/90 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-12">
            {t.skills.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-10">
            {t.skills.categories.map((category) => (
              <div key={category.name}>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <TechBadge
                      key={item.name}
                      name={item.name}
                      icon={item.icon}
                      color={item.color}
                    />
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
