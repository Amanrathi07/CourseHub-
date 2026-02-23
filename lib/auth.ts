import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "@/lib/env";

import { emailOTP } from "better-auth/plugins"

const adapter = new PrismaPg({connectionString:env.DATABASE_URL});

const prisma = new PrismaClient({adapter});
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),

     emailAndPassword: { 
    enabled: true, 
  }, 
    socialProviders: {
        google: { 
            clientId: env.GOOGLE_CLIENT_ID, 
            clientSecret: env.GOOGLE_CLIENT_SECRET, 
        }
    },

    plugins:[
        emailOTP({
            async sendVerificationOTP({ email, otp, type }) { 
                if (type === "sign-in") { 
                    // Send the OTP for sign in
                } else if (type === "email-verification") { 
                    // Send the OTP for email verification
                } else { 
                    // Send the OTP for password reset
                } 
            }, 
        })
    ]
});