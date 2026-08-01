import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "sain-family-capital-finance",
    version: "v2-foundation",
  });
}
