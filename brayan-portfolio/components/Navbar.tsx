"use client";

import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { profileLinks } from "@/data/experience";

const links = [
  ["Sobre mí", "sobre-mi"],
  ["Mi stack", "skills"],
  ["Proyectos", "proyectos"],
  ["Experiencia", "experiencia"],
  ["Contacto", "contacto"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const cvAvailable = Boolean(profileLinks.cv);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a className="group flex items-center gap-2 text-sm font-bold tracking-tight text-white" href="#inicio" onClick={() => setOpen(false)}>
          Brayan Alfonso Gutiérrez Flórez
          <span className="h-1.5 w-1.5 rounded-full bg-brand transition-transform group-hover:scale-125" />
        </a>
        <nav className="hidden items-center gap-7 text-xs font-medium text-slate-400 md:flex" aria-label="Navegación principal">
          {links.map(([label, href]) => <a key={href} className="transition-colors hover:text-white" href={`#${href}`}>{label}</a>)}
        </nav>
        {cvAvailable ? (
          <a className="button-secondary hidden sm:inline-flex" href={profileLinks.cv} download><Download size={14} /> Descargar CV</a>
        ) : (
          <span className="button-secondary hidden cursor-not-allowed opacity-60 sm:inline-flex" title="CV pendiente de configurar"><Download size={14} /> Descargar CV</span>
        )}
        <button className="icon-button md:hidden" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && <nav className="border-t border-line bg-surface px-5 py-4 md:hidden" aria-label="Navegación móvil">
        <div className="container flex flex-col gap-4 text-sm text-slate-300">
          {links.map(([label, href]) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
      </nav>}
    </header>
  );
}
