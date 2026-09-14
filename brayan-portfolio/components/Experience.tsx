import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return <section id="experiencia" className="section border-b border-line/70 bg-surface/30"><div className="container"><SectionHeading number="04" eyebrow="Trayectoria" title="Experiencia" /><div className="divide-y divide-line/60 border-y border-line/60">{experience.map((item) => <div className="grid gap-4 px-4 py-7 md:grid-cols-12" key={`${item.company}-${item.period}`}><div className="font-mono text-xs text-brand md:col-span-3">{item.period}</div><div className="md:col-span-4"><h3 className="font-semibold text-white">{item.role}</h3><p className="mt-1 text-xs text-slate-400">{item.company}</p><p className="mt-1 text-xs text-slate-500">{item.stage}</p></div><div className="md:col-span-5"><p className="text-sm leading-6 text-slate-300">{item.description}</p><div className="mt-5 flex flex-wrap gap-2">{item.projectSlugs.map((slug) => { const project = projects.find((entry) => entry.slug === slug); return project ? <span className="tag" key={project.slug}>{project.title}</span> : null; })}</div></div></div>)}</div></div></section>;
}
