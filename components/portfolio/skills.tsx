"use client";

import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-12">
            {t.skills.title}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.skills.categories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-medium text-foreground mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="px-3 py-1.5 text-sm font-normal hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                    >
                      {item}
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
