import arcjet, {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
} from "@arcjet/next";

import { env } from "./env";


export{ 
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
}

export const aj = arcjet({
  key: env.ARCJET_KEY!,
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