"use server";
import { env } from "@/lib/env";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: env.EMAIL,
    pass: env.EMAIL_PASS,
  },
});



export const sendEmail = async ( email:string, otp:string, type:string ) => {
  await transporter.sendMail({
    from: '"course-Hub"',
    to: email,
    subject: type,
    text: "otp is ",
    html: `<b>${otp}</b>`,
  });
};
