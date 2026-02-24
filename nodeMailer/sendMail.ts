"use server"
import { env } from "@/lib/env";
import nodemailer from "nodemailer"


export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: env.EMAIL,
    pass: env.EMAIL_PASS,
  },
});


 
