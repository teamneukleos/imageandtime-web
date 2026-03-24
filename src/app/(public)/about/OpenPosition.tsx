export const dynamic = "force-dynamic";

import { db } from "../../lib/db";
import OpenPositionsClient from "./OpenPositionsClient";
import type { Job } from "@prisma/client";

export default async function OpenPositions() {
  const jobs = await db.job.findMany({
    where: { active: true },
    orderBy: { createdAt: "desc" },
  }).catch(() => [] as Job[]);

  const serialized = jobs.map((job: Job) => ({
    ...job,
    createdAt: job.createdAt.toISOString().split("T")[0],
  }));

  return <OpenPositionsClient jobs={serialized} />;
}