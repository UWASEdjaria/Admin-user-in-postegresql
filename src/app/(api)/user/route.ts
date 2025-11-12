import { NextResponse } from "next/server";
import prisma from "../../lib/prisma"

export async function POST(req: Request) {
  const { name, email, gender, password, role } = await req.json();
  const user = await prisma.user.create({
    data: { name, email, gender, password, role },
  });
  return NextResponse.json(user);
}

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

