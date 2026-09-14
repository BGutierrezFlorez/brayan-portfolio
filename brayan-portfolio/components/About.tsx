import { Database, Laptop, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const focus = [
  [Laptop, "Frontend", "Interfaces responsive con React, Next.js y TypeScript."],
  [Terminal, "Backend", "Desarrollo orientado a Java, Spring Boot y APIs REST."],
  [Database, "Bases de datos", "Trabajo con bases de datos relacionales SQL."],
] as const;

export function About() {
  return <section id="sobre-mi" className="section border-b border-line/70"><div className="container"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><SectionHeading number="01" eyebrow="Perfil" title="Sobre mí" /></div><div className="space-y-4 text-base leading-7 text-slate-300 lg:col-span-8"><p>Soy Tecnólogo en Análisis y Desarrollo de Software, formado en el SENA y en proceso de certificación.</p><p>Estoy orientado al desarrollo Full Stack, con interés y experiencia formativa trabajando con Java, Spring Boot, React, Next.js, APIs REST y bases de datos SQL.</p><p>Busco seguir creciendo profesionalmente mientras construyo soluciones claras, funcionales y mantenibles.</p></div></div><div className="mt-14 grid gap-8 border-t border-line/60 pt-8 md:grid-cols-3">{focus.map(([Icon, title, text]) => <div key={title} className="space-y-3"><div className="icon-tile"><Icon size={19} /></div><h3 className="heading-card">{title}</h3><p className="text-sm leading-6 text-slate-400">{text}</p></div>)}</div></div></section>;
}
