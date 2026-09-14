import { ArrowLeft, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <main className="min-h-screen pt-28"><div className="container max-w-4xl"><Link className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand" href="/#proyectos"><ArrowLeft size={16} /> Volver a proyectos</Link><div className="mt-12"><span className="eyebrow">{project.type === "personal" ? "Proyecto personal" : "Proyecto profesional"} / {project.slug}</span><h1 className="heading-display mt-4">{project.title}</h1>{project.technicalName && <p className="mt-3 font-mono text-sm text-brand">{project.technicalName}</p>}<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{project.longDescription}</p><p className="mt-4 text-sm text-slate-400">{project.context}</p><div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div></div><div className="mt-14 grid gap-5 sm:grid-cols-2"><Detail title="Problema" value={project.problem} /><Detail title="Solución" value={project.solution} /><Detail title="Arquitectura" value={project.architecture} /><Detail title="Funcionalidades" value={project.features.length ? project.features.join(", ") : "Información pendiente de completar."} /></div><div className="mt-10 flex flex-wrap gap-3">{project.githubUrl && <a className="button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">Ver código <Code2 size={16} /></a>}{project.demoUrl && <a className="button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">Ver demo <ExternalLink size={16} /></a>}{!project.githubUrl && !project.demoUrl && <span className="inline-flex items-center gap-2 text-sm text-slate-500">Enlaces pendientes de configurar <ArrowUpRight size={15} /></span>}</div></div></main>;
}

function Detail({ title, value }: { title: string; value: string }) {
  return <section className="data-panel"><span className="eyebrow">{title}</span><p className="mt-3 text-sm leading-6 text-slate-300">{value}</p></section>;
}
