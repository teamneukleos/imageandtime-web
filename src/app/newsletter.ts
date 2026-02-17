"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    throw new Error("Email is required");
  }

  await resend.emails.send({
    from: "Image & Time Updates <info@imageandtime.com>",
    to: "info@imageandtime.com",
    subject: "New Newsletter Signup",
    text: `A new visitor subscribed to the newsletter:\n\n${email}`,
  });
}
