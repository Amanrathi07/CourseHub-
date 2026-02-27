/*
import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);

*/


import arcjet, { detectBot, shield, slidingWindow } from "@arcjet/next";
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    // Shield WAF — blocks common web attacks (SQLi, XSS, etc.)
    shield({ mode: "LIVE" }),

    // Rate limit login/signup attempts: 10 requests per 60s per IP
    slidingWindow({
      mode: "LIVE",
      interval: "60s",
      max: 10,
    }),

    // Block bots from hitting auth endpoints
    detectBot({
      mode: "LIVE",
      allow: [], // block all bots — no exceptions on auth routes
    }),
  ],
});

const betterAuthHandler = toNextJsHandler(auth);

export async function GET(req: NextRequest) {
  return betterAuthHandler.GET(req);
}

export async function POST(req: NextRequest) {
  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    if (decision.reason.isBot()) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return betterAuthHandler.POST(req);
}