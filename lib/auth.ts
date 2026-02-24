import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "@/lib/env";

import { emailOTP } from "better-auth/plugins"
import { transporter } from "@/nodeMailer/sendMail";

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
                    await transporter.sendMail({
                        from: '"course-Hub"',
                        to: email,
                        subject: type,
                        text: "otp is ", 
                        html: `<b>${otp}</b>`,
                      });
                } else if (type === "email-verification") { 
                    await transporter.sendMail({
                        from: '"course-Hub"',
                        to: email,
                        subject: type,
                        text: "otp is ", 
                        html: `<b>${otp}</b>`,
                      });
                } else { 
                    await transporter.sendMail({
                        from: '"course-Hub"',
                        to: email,
                        subject: type,
                        text: "otp is ", 
                        html: `<b>${otp}</b>`,
                      });
                } 
            }, 
        })
    ]
});