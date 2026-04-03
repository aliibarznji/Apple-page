import { NextResponse } from "next/server";
import { createHttpError } from "./catalog-store";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

export function jsonNoStore(payload, init = {}) {
  return NextResponse.json(payload, {
    ...init,
    headers: {
      ...noStoreHeaders,
      ...(init.headers ?? {}),
    },
  });
}

export async function parseJsonBody(request) {
  const bodyText = await request.text();

  if (!bodyText.trim()) {
    return undefined;
  }

  try {
    return JSON.parse(bodyText);
  } catch {
    throw createHttpError(400, "Request body contains invalid JSON.");
  }
}

export function toErrorResponse(error) {
  const status = error?.status || 500;
  const message =
    status >= 500 ? "Internal server error." : error?.message || "Internal server error.";

  if (status >= 500) {
    console.error(error);
  }

  return jsonNoStore({ message }, { status });
}
