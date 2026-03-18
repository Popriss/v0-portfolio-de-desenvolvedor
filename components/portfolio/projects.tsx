"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, X, Target, FileText, Zap, Code2 } from "lucide-react";

const INITIAL_COUNT = 6;

type ProjectItem = {
  label: string;
  title: string;
  description: string;
  objective: string;
  impact: string;
  techs: readonly string[];
};

function getLabelClass(label: string, labelColors: Record<string, string>): string {
  return (
    labelColors[label] ??
    "bg-zinc-500/15 text-zinc-400 border-zinc-500/30"
  );
}

function ProjectModal({
  project,
  open,
  onClose,
  labelColors,
  objectiveLabel,
  descriptionLabel,
  impactLabel,
  techsLabel,
}: {
  project: ProjectItem | null;
  open: boolean;
  onClose: () => void;
  labelColors: Record<string, string>;
  objectiveLabel: string;
  descriptionLabel: string;
  impactLabel: string;
  techsLabel: string;
}) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-card border-border/60 max-w-lg p-0 gap-0 overflow-hidden">
        {/* Header strip */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-border/40">
          <div className="flex flex-col gap-2">
            <span
              className={`self-start text-xs font-medium px-2.5 py-0.5 rounded-full border ${getLabelClass(project.label, labelColors)}`}
            >
              {project.label}
            </span>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <DialogClose asChild>
            <button
              onClick={onClose}
              className="mt-1 ml-3 shrink-0 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogClose>
        </div>

        {/* Body */}
        <div className="px-6 py-5 flex flex-col gap-5">
          {/* Objetivo */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-1.5">
              <Target className="h-3 w-3" />
              {objectiveLabel}
            </p>
            <p className="text-sm font-medium text-foreground leading-relaxed">
              {project.objective}
            </p>
          </div>

          {/* Descrição */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-1.5">
              <FileText className="h-3 w-3" />
              {descriptionLabel}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Impacto */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-1.5">
              <Zap className="h-3 w-3" />
              {impactLabel}
            </p>
            <p className="text-sm font-medium text-primary leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Tecnologias */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2.5">
              {techsLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const allProjects = t.projects.items as unknown as ProjectItem[];
  const labelColors = t.projects.labelColors as Record<string, string>;
  const visible = showAll ? allProjects : allProjects.slice(0, INITIAL_COUNT);
  const hasMore = allProjects.length > INITIAL_COUNT;

  const objectiveLabel =
    "language" in t ? "Objetivo" : "Objective";
  const descriptionLabel =
    "language" in t ? "Descrição" : "Description";
  const impactLabel = "language" in t ? "Impacto" : "Impact";
  const techsLabel = "language" in t ? "Tecnologias" : "Technologies";

  function openModal(project: ProjectItem) {
    setSelected(project);
    setModalOpen(true);
  }

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-12">
            {t.projects.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((project, index) => (
              <Card
                key={index}
                onClick={() => openModal(project)}
                className="group bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              >
                <CardHeader className="pb-2 pt-5 px-5">
                  <span
                    className={`self-start text-xs font-medium px-2.5 py-0.5 rounded-full border mb-2 ${getLabelClass(project.label, labelColors)}`}
                  >
                    {project.label}
                  </span>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                onClick={() => setShowAll((v) => !v)}
                className="gap-2 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
              >
                {showAll ? (
                  <>
                    {t.projects.showLess}
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    {t.projects.showMore}
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>

      <ProjectModal
        project={selected}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        labelColors={labelColors}
        objectiveLabel={objectiveLabel}
        descriptionLabel={descriptionLabel}
        impactLabel={impactLabel}
        techsLabel={techsLabel}
      />
    </section>
  );
}
