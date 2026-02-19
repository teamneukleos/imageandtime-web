"use client";

type Job = {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    description: "Build and maintain awesome web apps using React and Next.js.",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    type: "Contract",
    location: "Lagos, Nigeria",
    description: "Design beautiful user experiences for our web and mobile apps.",
  },
  {
    id: "3",
    title: "Product Manager",
    type: "Full-time",
    location: "London, UK",
    description: "Oversee product development from idea to launch.",
  },
];

export default function OpenPositions() {
  if (!jobs.length) {
    return (
      <section className="w-full py-20 px-6 bg-[#111111] text-white text-center">
        <h3 className="text-2xl mb-4">No open roles right now</h3>
        <p className="text-gray-400">
          But we’re always happy to meet talented people.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full py-20 px-6 bg-[#111111] text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <h3 className="text-3xl font-light text-center">Open Positions</h3>

        {jobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-800 p-8 rounded-xl space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h4 className="text-xl">{job.title}</h4>
              <span className="text-sm text-gray-400">
                {job.type} • {job.location}
              </span>
            </div>

            <p className="text-gray-400">{job.description}</p>

            <a
              href={`mailto:Recruitment@imageandtime.com.?subject=Application for ${job.title}`}
              className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-lg text-sm hover:bg-gray-200 transition"
            >
              Apply via Email
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
