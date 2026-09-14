import { NextResponse } from "next/server";

type ContactRequest = {
  nombre?: string;
  correo?: string;
  asunto?: string;
  mensaje?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const nombre = body.nombre?.trim();
    const correo = body.correo?.trim();
    const asunto = body.asunto?.trim();
    const mensaje = body.mensaje?.trim();

    if (!nombre || !correo || !asunto || !mensaje) {
      return NextResponse.json(
        {
          error: "Todos los campos son obligatorios.",
        },
        { status: 400 },
      );
    }

    if (nombre.length < 2) {
      return NextResponse.json(
        {
          error: "El nombre debe tener al menos 2 caracteres.",
        },
        { status: 400 },
      );
    }

    if (asunto.length < 3) {
      return NextResponse.json(
        {
          error: "El asunto es demasiado corto.",
        },
        { status: 400 },
      );
    }

    if (mensaje.length < 10) {
      return NextResponse.json(
        {
          error: "El mensaje debe tener al menos 10 caracteres.",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        {
          error: "Ingresa un correo electrónico válido.",
        },
        { status: 400 },
      );
    }

    /*
     * Aquí conectaremos posteriormente el servicio
     * encargado de enviar el correo.
     */

    console.log("Nuevo mensaje de contacto:", {
      nombre,
      correo,
      asunto,
      mensaje,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje recibido correctamente.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        error: "No se pudo procesar la solicitud.",
      },
      { status: 500 },
    );
  }
}