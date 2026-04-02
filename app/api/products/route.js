import { NextResponse } from "next/server";
import { productCatalog } from "../../lib/products-catalog";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(productCatalog, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
