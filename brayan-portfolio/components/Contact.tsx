import { ArrowUpRight, Mail } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { profileLinks } from "@/data/experience";

export function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">07 / Contacto</span>

          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            ¿Hablamos?
          </h2>

          <p className="mx-auto mt-5 max-w-lg leading-7 text-slate-300">
            Estoy abierto a oportunidades laborales, proyectos y
            colaboraciones.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-white/[0.02] p-6 sm:p-8">
          <ContactForm />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-line/60 pt-7 text-sm text-slate-400">
          {profileLinks.email && (
            <>
              <a
                href={`mailto:${profileLinks.email}`}
                className="inline-flex items-center gap-2 transition hover:text-brand"
              >
                <Mail size={15} />
                {profileLinks.email}
              </a>

              <span className="text-slate-700">·</span>
            </>
          )}

          {profileLinks.github && (
            <>
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition hover:text-brand"
              >
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <span className="text-slate-700">·</span>
            </>
          )}

          {profileLinks.linkedin && (
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 transition hover:text-brand"
            >
              LinkedIn
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}