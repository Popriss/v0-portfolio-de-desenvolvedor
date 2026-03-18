"use client";

import { useLanguage } from "@/lib/language-context";
import { socialLinks } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github, Languages } from "lucide-react";
import Link from "next/link";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          PM
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.about}
          </Link>
          <Link
            href="#experience"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.experience}
          </Link>
          <Link
            href="#projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.projects}
          </Link>
          <Link
            href="#skills"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.skills}
          </Link>
          <Link
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground hover:text-foreground"
          >
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground hover:text-foreground"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground hover:text-foreground"
          >
            <a href={socialLinks.email} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <div className="w-px h-6 bg-border mx-2" />
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-medium"
          >
            <Languages className="h-3.5 w-3.5" />
            {language === "pt" ? "EN" : "PT"}
          </Button>
        </div>
      </nav>
    </header>
  );
}
