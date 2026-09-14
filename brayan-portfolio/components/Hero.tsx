import { ArrowDown, ArrowUpRight, Download, Database, Server, Layout, CheckCircle2 } from "lucide-react";
import { profileLinks } from "@/data/experience";

export function Hero() {
  const cvAvailable = Boolean(profileLinks.cv);
  return <section id="inicio" className="hero border-b border-line/70">
    <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-6">
        <span className="status-pill"><span className="status-dot animate-pulse" /> FULL STACK DEVELOPER</span>
        <h1 className="heading-display mt-6">Desarrollo software para resolver problemas <span className="text-brand">reales</span>.</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">Desarrollador Full Stack Junior con formación en <strong>Java, Spring Boot, React, Next.js y TypeScript</strong>.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="button-primary" href="#proyectos">Ver proyectos <ArrowDown size={17} /></a>
          {cvAvailable ? <a className="button-secondary" href={profileLinks.cv} download>Descargar CV <Download size={17} /></a> : <span className="button-secondary cursor-not-allowed opacity-60" title="CV pendiente de configurar">Descargar CV <Download size={17} /></span>}
        </div>
        <div className="mt-8 flex items-center gap-5 text-sm text-slate-400">
          {profileLinks.github ? <a href={profileLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-brand">GitHub <ArrowUpRight size={13} /></a> : <span className="muted-link">GitHub pendiente</span>}
          <span className="text-slate-700">/</span>
          {profileLinks.linkedin ? <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-brand">LinkedIn <ArrowUpRight size={13} /></a> : <span className="muted-link">LinkedIn pendiente</span>}
        </div>
      </div>
      <div className="lg:col-span-6">
        <div className="architecture-window">
          <div className="window-bar"><div className="flex gap-1.5"><i className="window-dot bg-red-500/70" /><i className="window-dot bg-amber-400/70" /><i className="window-dot bg-emerald-400/70" /></div><span className="code-label">app.architecture.config</span><span className="w-10" /></div>
          <div className="space-y-3">
            <ArchitectureRow icon={<Layout size={17} />} title="Client Interface" detail="React · Next.js · TypeScript" badge="Reactive UI" tone="sky" />
            <div className="flow-label">↕ JSON REST APIs / Type-safe</div>
            <ArchitectureRow icon={<Server size={17} />} title="Application Core" detail="Java · Spring Boot" badge="Clean Service" tone="amber" />
            <div className="flow-label">↓ JPA / Hibernate ORM</div>
            <ArchitectureRow icon={<Database size={17} />} title="Persistence & Storage" detail="PostgreSQL · MySQL" badge="ACID Model" tone="blue" />
          </div>
          <div className="window-footer"><span><CheckCircle2 size={12} className="text-emerald-400" /> Build ready</span><span className="text-brand">Full Stack Pipeline</span></div>
        </div>
        <div className="floating-badge"><CheckCircle2 size={18} className="text-brand" /><span><strong>Full Stack Focus</strong><small>End-to-End Solutions</small></span></div>
      </div>
    </div>
  </section>;
}

function ArchitectureRow({ icon, title, detail, badge, tone }: { icon: React.ReactNode; title: string; detail: string; badge: string; tone: string }) {
  return <div className="architecture-row"><span className={`architecture-icon ${tone}`}>{icon}</span><span className="min-w-0 flex-1"><strong>{title}</strong><small>{detail}</small></span><span className={`architecture-badge ${tone}`}>{badge}</span></div>;
}
