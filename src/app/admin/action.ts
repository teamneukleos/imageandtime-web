"use server";

import { db } from "../lib/db";
import { revalidatePath } from "next/cache";

export async function createJob(form: {
  title: string;
  type: string;
  location: string;
  description: string;
}) {
  await db.job.create({ data: form });
  revalidatePath("/admin/dashboard");
}

export async function updateJob(id: string, form: {
  title: string;
  type: string;
  location: string;
  description: string;
}) {
  await db.job.update({ where: { id }, data: form });
  revalidatePath("/admin/dashboard");
}

export async function deleteJob(id: string) {
  await db.job.delete({ where: { id } });
  revalidatePath("/admin/dashboard");
}

export async function toggleJob(id: string, active: boolean) {
  await db.job.update({ where: { id }, data: { active } });
  revalidatePath("/admin/dashboard");
}