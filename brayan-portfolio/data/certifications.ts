export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  description?: string;
  skills?: string[];
  certificateUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "diploma-fundamentos-net",
    name: "diploma-fundamentos-net",
    issuer: "",
    certificateUrl: "/certificates/diploma-fundamentos-net.pdf",
  },
  {
    id: "javascript-moderno-guia",
    name: "JavaScript Moderno Guía",
    issuer: "",
    certificateUrl: "/certificates/JavaScript%20Moderno%20Gu%C3%ADa.pdf",
  },
  {
    id: "sql-server-curso",
    name: "SQL Server - Curso",
    issuer: "",
    certificateUrl: "/certificates/SQL%20Server%20-%20Curso.pdf",
  },
  {
    id: "typescript-tu-completa",
    name: "TypeScript Tu completa",
    issuer: "",
    certificateUrl: "/certificates/TypeScript%20Tu%20completa.pdf",
  },
];
