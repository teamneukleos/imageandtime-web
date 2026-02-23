"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function applyForJob(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const location = formData.get("location") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const jobTitle = formData.get("jobTitle") as string;

    const file = formData.get("cv") as File;

    if (!file) throw new Error("CV missing");

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await resend.emails.send({
      from: "Careers <info@imageandtime.com>",
      to: "info@imageandtime.com",
      replyTo: email,
      subject: `New Job Application — ${jobTitle}`,

      text: `
New Job Application Received

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Country: ${country}
City: ${location}

Position: ${jobTitle}

Cover Letter:
${coverLetter}

---
Sent from Image & Time Careers page
      `,

      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}