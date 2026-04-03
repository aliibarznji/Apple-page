import { createProduct, getCatalog } from "./_lib/catalog-store";
import { jsonNoStore, parseJsonBody, toErrorResponse } from "./_lib/response";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const section = request.nextUrl.searchParams.get("section") ?? undefined;
    const payload = await getCatalog({ section });

    return jsonNoStore(payload);
  } catch (error) {
    return toErrorResponse(error);
  }
}

export async function POST(request) {
  try {
    const payload = await createProduct(await parseJsonBody(request));

    return jsonNoStore(
      {
        message: "Product created successfully.",
        ...payload,
      },
      { status: 201 },
    );
  } catch (error) {
    return toErrorResponse(error);
  }
}
