const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000";
const API_PREFIX = "/api/v1";

function buildUrl(path: string, params?: Record<string, string | number | boolean | undefined>) {
  const url = new URL(`${API_PREFIX}${path}`, API_BASE);
  if (params) {
    Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null && value !== "")
      .forEach(([key, value]) => url.searchParams.set(key, String(value)));
  }
  return url;
}

export interface ApiOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
  authToken?: string | null;
}

export async function apiFetch<TResponse>(path: string, options: ApiOptions = {}): Promise<TResponse> {
  const { params, authToken, headers, ...rest } = options;
  const url = buildUrl(path, params);
  const response = await fetch(url, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      ...(headers ?? {})
    },
    cache: "no-store"
  });

  if (!response.ok) {
    const body = await safeParseJson(response);
    const error = new Error(
      `API request failed with ${response.status} ${response.statusText}`
    ) as Error & { status: number; payload?: unknown };
    error.status = response.status;
    error.payload = body;
    throw error;
  }

  return (await safeParseJson(response)) as TResponse;
}

async function safeParseJson(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export function getApiBase(): string {
  return API_BASE;
}
