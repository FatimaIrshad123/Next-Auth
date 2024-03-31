import { NextApiRequest } from "next";
import NextAuth from "next-auth/next";
import { NextResponse } from "next/server";
import { NEXT_AUTH } from "@/app/lib/auth";

const handler = NextAuth(NEXT_AUTH)
export const GET = handler;
export const POST = handler;
