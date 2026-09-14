"use client";

import { Download, ExternalLink, LoaderCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const pdfOptions = {
  disableRange: true,
  disableStream: true,
};

interface CertificateViewerProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  certificateName: string;
}

export function CertificateViewer({ isOpen, onClose, certificateUrl, certificateName }: CertificateViewerProps) {
  const viewerContentRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !viewerContentRef.current) return;

    const updatePageWidth = () => {
      const contentWidth = viewerContentRef.current?.clientWidth ?? 0;
      setPageWidth(Math.max(contentWidth - 32, 240));
    };
    const resizeObserver = new ResizeObserver(updatePageWidth);
    resizeObserver.observe(viewerContentRef.current);
    updatePageWidth();

    return () => resizeObserver.disconnect();
  }, [isOpen]);

  if (!isOpen) return null;

  return <div className="certificate-viewer" role="dialog" aria-modal="true" aria-labelledby="certificate-viewer-title">
    <div className="certificate-viewer-backdrop" onClick={onClose} aria-hidden="true" />
    <div className="certificate-viewer-panel">
      <header className="certificate-viewer-header">
        <h2 id="certificate-viewer-title" className="min-w-0 truncate text-sm font-semibold text-white">{certificateName}</h2>
        <div className="flex shrink-0 items-center gap-2">
          <a className="certificate-viewer-action" href={certificateUrl} download aria-label="Descargar certificado"><Download size={16} /><span className="hidden sm:inline">Descargar</span></a>
          <a className="certificate-viewer-action" href={certificateUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir certificado en nueva pestaña"><ExternalLink size={16} /><span className="hidden sm:inline">Abrir en nueva pestaña</span></a>
          <button className="certificate-viewer-close" type="button" onClick={onClose} aria-label="Cerrar visor"><X size={20} /></button>
        </div>
      </header>
      <div className="certificate-viewer-content" ref={viewerContentRef}>
        {isLoading && <div className="certificate-viewer-status"><LoaderCircle className="animate-spin text-brand" size={24} /><span>Cargando certificado...</span></div>}
        {loadError ? <div className="certificate-viewer-status"><p>No se pudo visualizar este certificado dentro del sitio.</p><a className="button-secondary" href={certificateUrl} target="_blank" rel="noopener noreferrer">Abrir en nueva pestaña <ExternalLink size={15} /></a></div> : pageWidth > 0 && <Document file={certificateUrl} options={pdfOptions} loading={null} onSourceSuccess={() => { setPageCount(0); setIsLoading(true); setLoadError(false); }} onLoadSuccess={({ numPages }) => { setPageCount(numPages); setIsLoading(false); }} onLoadError={() => { setIsLoading(false); setLoadError(true); }}>
          <div className="certificate-pages" aria-label={`${pageCount || ""} páginas de ${certificateName}`}>
            {Array.from({ length: pageCount }, (_, index) => <Page key={`${certificateUrl}-${index + 1}`} pageNumber={index + 1} width={pageWidth} renderAnnotationLayer renderTextLayer loading={<div className="certificate-page-loading"><LoaderCircle className="animate-spin text-brand" size={20} /></div>} />)}
          </div>
        </Document>}
      </div>
    </div>
  </div>;
}
