"use client";

import { Award, Download, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { certifications } from "@/data/certifications";
import type { Certification } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

const CertificateViewer = dynamic(() => import("./CertificateViewer").then((module) => module.CertificateViewer), { ssr: false });

export function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  return <><section id="certificaciones" className="section border-b border-line/70 bg-surface/30"><div className="container"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><SectionHeading number="06" eyebrow="Credenciales" title="Certificaciones" /><p className="max-w-sm text-sm leading-6 text-slate-400">Formación complementaria y certificados disponibles que respaldan mis conocimientos técnicos.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">{certifications.map((certification) => <article className="certification-card" key={certification.id}><div className="flex items-start gap-3"><span className="icon-tile"><Award size={18} /></span><div className="min-w-0"><h3 className="heading-card text-base">{certification.name}</h3>{certification.issuer && <p className="mt-1 text-xs text-slate-400">{certification.issuer}</p>}{certification.date && <p className="mt-2 text-xs text-slate-500">{certification.date}</p>}</div></div>{certification.description && <p className="mt-4 text-sm leading-6 text-slate-400">{certification.description}</p>}{certification.skills && certification.skills.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{certification.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>}<div className="mt-6 flex flex-wrap gap-3 border-t border-line/60 pt-4"><button className="button-primary" type="button" onClick={() => setSelectedCertification(certification)}><ExternalLink size={14} /> Ver certificado</button><a className="button-secondary" href={certification.certificateUrl} download><Download size={14} /> Descargar</a></div></article>)}</div></div></div></section><CertificateViewer isOpen={Boolean(selectedCertification)} onClose={() => setSelectedCertification(null)} certificateUrl={selectedCertification?.certificateUrl ?? ""} certificateName={selectedCertification?.name ?? "Certificado"} /></>;
}
