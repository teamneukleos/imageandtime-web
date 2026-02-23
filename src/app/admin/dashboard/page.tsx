import { db } from "../../lib/db";
import AdminDashboardClient from "./AdminDashboardClient";

export default async function AdminDashboardPage() {
  const jobs = await db.job.findMany({
    orderBy: { createdAt: "desc" },
  });

  const serialized = jobs.map((job) => ({
    ...job,
    createdAt: job.createdAt.toISOString().split("T")[0],
  }));

  return <AdminDashboardClient jobs={serialized} />;
}