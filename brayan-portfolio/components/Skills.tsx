import { Braces, Cloud, Code2, Database, GitBranch, Globe, Package, Send, ShieldCheck, Table2, Wrench } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

const icons = [Code2, Globe, Database, Wrench];
const skillIcons: Record<string, typeof Code2> = { Java: Code2, "Spring Boot": Cloud, React: Globe, "Next.js": Package, TypeScript: Braces, PostgreSQL: Database, MySQL: Table2, SQL: Table2, Git: GitBranch, GitHub: GitBranch, Docker: Cloud, Postman: Send, JWT: ShieldCheck };

export function Skills() {
  return <section id="skills" className="section border-b border-line/70 bg-surface/35"><div className="container"><SectionHeading number="02" eyebrow="Tecnologías" title="Mi stack" /><div className="space-y-10">{skillGroups.map((group, index) => { const GroupIcon = icons[index]; return <div key={group.title}><h3 className="eyebrow mb-5 flex items-center gap-2 text-slate-400"><GroupIcon size={13} /> {group.title}</h3><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{group.items.map((skill) => { const Icon = skillIcons[skill] ?? Code2; return <div className="skill-card" key={skill}><span className="skill-icon"><Icon size={17} /></span><span>{skill}</span></div>; })}</div></div>; })}</div></div></section>;
}
