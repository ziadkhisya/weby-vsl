import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "edge";

const rateBucket = new Map<
  string,
  {
    remaining: number;
    resetAt: number;
  }
>();

const RATE_LIMIT_WINDOW = 120_000;
const RATE_LIMIT_TOKENS = 2;

const contactSchema = z.object({
  name: z.string().min(2, { message: "Please share your full name." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  company: z.string().optional(),
  message: z
    .string()
    .min(20, { message: "Give us a little more context so we can prepare." }),
});

const resolveClientKey = (request: Request) => {
  const forwarded = request.headers
    .get("x-forwarded-for")
    ?.split(",")
    .shift()
    ?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const cfConnecting = request.headers.get("cf-connecting-ip")?.trim();
  return forwarded ?? realIp ?? cfConnecting ?? "unknown";
};

const consumeRateLimit = (key: string) => {
  const now = Date.now();
  const bucket = rateBucket.get(key);

  if (!bucket || now > bucket.resetAt) {
    rateBucket.set(key, {
      remaining: RATE_LIMIT_TOKENS - 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (bucket.remaining <= 0) return false;

  bucket.remaining -= 1;
  return true;
};

export async function POST(request: Request) {
  const clientKey = resolveClientKey(request);

  if (!consumeRateLimit(clientKey)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests, please retry shortly." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error.flatten(),
      },
      { status: 422 },
    );
  }

  // TODO: send to CRM / webhook

  return NextResponse.json({ ok: true });
}
