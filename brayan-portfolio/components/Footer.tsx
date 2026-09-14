import { profileLinks } from "@/data/experience";

export function Footer() {
  return <footer className="border-t border-line/70"><div className="container flex flex-col items-center justify-between gap-4 py-7 text-xs text-slate-400 sm:flex-row"><div><strong className="text-white">Brayan Alfonso Gutiérrez Flórez</strong><span className="mx-2 text-slate-600">-</span>Desarrollador Full Stack Junior</div><div className="flex gap-4">{profileLinks.github && <a href={profileLinks.github}>GitHub</a>}{profileLinks.linkedin && <a href={profileLinks.linkedin}>LinkedIn</a>}{profileLinks.email && <a href={`mailto:${profileLinks.email}`}>Email</a>}</div><span className="font-mono text-slate-500">© 2026</span></div></footer>;
}
