import { NextResponse } from "next/server";

// ✅ Importa o prisma do auth.ts — não há arquivo prisma.ts separado
import { prisma } from "@/lib/auth";

export async function GET() {
  try {
    const tarefas = await prisma.tarefa.findMany();
    return NextResponse.json(tarefas);
  } catch (_error) {
    return NextResponse.json(
      { error: "Erro ao buscar tarefas" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as {
      titulo: string;
      usuarioId: string;
    };

    const novaTarefa = await prisma.tarefa.create({
      data: {
        titulo: data.titulo,
        usuarioId: data.usuarioId,
      },
    });

    return NextResponse.json(novaTarefa, { status: 201 });
  } catch (_error) {
    return NextResponse.json(
      { error: "Erro ao criar tarefa" },
      { status: 400 },
    );
  }
}
