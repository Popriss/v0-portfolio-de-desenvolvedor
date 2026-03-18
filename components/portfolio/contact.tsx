"use client";

import { useLanguage } from "@/lib/language-context";
import { socialLinks } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowUpRight, MessageCircle } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            {t.contact.title}
          </h2>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            {t.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="font-medium group">
              <a href={socialLinks.email}>
                <Mail className="h-4 w-4 mr-2" />
                {t.contact.emailLabel}
                <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="font-medium group bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0"
            >
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {t.contact.whatsappLabel}
                <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-medium group"
            >
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                {t.contact.linkedinLabel}
                <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground font-mono">
            {t.contact.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
