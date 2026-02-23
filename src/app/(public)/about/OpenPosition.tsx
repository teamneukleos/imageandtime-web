import { db } from "../../lib/db";
import OpenPositionsClient from "./OpenPositionsClient";

export default async function OpenPositions() {
  const jobs = await db.job.findMany({
    where: { active: true },
    orderBy: { createdAt: "desc" },
  });

  const serialized = jobs.map((job) => ({
    ...job,
    createdAt: job.createdAt.toISOString().split("T")[0],
  }));

  return <OpenPositionsClient jobs={serialized} />;
}