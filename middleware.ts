import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserMeLoader } from "./data/services/get-user-me-loader";

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}