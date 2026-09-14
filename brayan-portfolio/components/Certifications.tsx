import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return <section id="certificaciones" className="section border-b border-line/70 bg-surface/30"><div className="container grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><SectionHeading number="06" eyebrow="Credenciales" title="Certificaciones" /></div><div className="lg:col-span-8"><div className="empty-state"><Award size={20} /><span>No hay certificaciones disponibles para mostrar.</span><small>Esta sección está preparada para agregar nuevas certificaciones.</small></div></div></div></section>;
}
