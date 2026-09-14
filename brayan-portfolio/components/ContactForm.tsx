"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";

type FormData = {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
};

const initialForm: FormData = {
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setStatus({
        type: "success",
        message: "¡Mensaje enviado correctamente!",
      });

      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al enviar el mensaje.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Nombre
          </label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            minLength={2}
            maxLength={100}
            className="w-full rounded-lg border border-line bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Correo electrónico
          </label>

          <input
            id="correo"
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
            maxLength={150}
            className="w-full rounded-lg border border-line bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="asunto"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Asunto
        </label>

        <input
          id="asunto"
          name="asunto"
          type="text"
          value={formData.asunto}
          onChange={handleChange}
          placeholder="¿En qué podemos trabajar?"
          required
          minLength={3}
          maxLength={150}
          className="w-full rounded-lg border border-line bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Mensaje
        </label>

        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntame sobre tu propuesta..."
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          className="w-full resize-y rounded-lg border border-line bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>

      {status.type && (
        <div
          role="alert"
          className={`rounded-lg border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="button-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={17} />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}
