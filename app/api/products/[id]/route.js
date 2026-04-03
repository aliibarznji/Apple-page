import {
  deleteProduct,
  getProductById,
  replaceProduct,
  updateProduct,
} from "../_lib/catalog-store";
import { jsonNoStore, parseJsonBody, toErrorResponse } from "../_lib/response";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getProductId(paramsPromise) {
  const { id } = await paramsPromise;
  return id;
}

export async function GET(_request, { params }) {
  try {
    const payload = await getProductById(await getProductId(params));

    return jsonNoStore(payload);
  } catch (error) {
    return toErrorResponse(error);
  }
}

export async function PUT(request, { params }) {
  try {
    const payload = await replaceProduct(
      await getProductId(params),
      await parseJsonBody(request),
    );

    return jsonNoStore({
      message: "Product replaced successfully.",
      ...payload,
    });
  } catch (error) {
    return toErrorResponse(error);
  }
}

export async function PATCH(request, { params }) {
  try {
    const payload = await updateProduct(
      await getProductId(params),
      await parseJsonBody(request),
    );

    return jsonNoStore({
      message: "Product updated successfully.",
      ...payload,
    });
  } catch (error) {
    return toErrorResponse(error);
  }
}

export async function DELETE(_request, { params }) {
  try {
    const payload = await deleteProduct(await getProductId(params));

    return jsonNoStore({
      message: "Product deleted successfully.",
      ...payload,
    });
  } catch (error) {
    return toErrorResponse(error);
  }
}
