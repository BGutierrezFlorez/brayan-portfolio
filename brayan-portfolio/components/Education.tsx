import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return <section id="educacion" className="section border-b border-line/70"><div className="container grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><SectionHeading number="05" eyebrow="Formación" title="Educación" /></div><div className="lg:col-span-8"><div className="flex gap-4 border-b border-line/60 pb-7"><span className="icon-tile"><GraduationCap size={19} /></span><div className="flex-1"><div className="flex flex-col justify-between gap-2 sm:flex-row"><h3 className="font-semibold text-white">Tecnólogo en Análisis y Desarrollo de Software</h3><span className="font-mono text-xs text-brand">En proceso de certificación</span></div><p className="mt-2 text-sm text-slate-400">Servicio Nacional de Aprendizaje - SENA</p></div></div></div></div></section>;
}
