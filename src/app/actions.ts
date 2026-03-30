"use server";

import { Resend } from "resend";

const resend = new Resend("re_fG1dPfmi_ALPoxQxU6CLeyPgDDemXyWLX");

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("Missing fields");
  }

  await resend.emails.send({
    from: "General Enquiries <info@imageandtime.com>",
    to: "info@imageandtime.com",
    replyTo: email,
    subject: `New Website Enquiry from ${name}`,

    text: `
You have received a new enquiry from your website contact form.

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from Image & Time website contact form
    `,
  });


}
