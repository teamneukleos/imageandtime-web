"use client";

import { useState } from "react";
import { applyForJob } from "../../apply";

type Job = {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  active: boolean;
  createdAt: string;
};

export default function OpenPositionsClient({ jobs }: { jobs: Job[] }) {
  const [openForm, setOpenForm] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  return (
    <section className="w-full py-20 px-6 bg-[#111111] text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <h3 className="text-3xl font-light text-center">Open Positions</h3>

        {jobs.length === 0 ? (
          <div className="border border-gray-800 p-12 rounded-xl text-center space-y-3">
            <p className="text-xl text-gray-300">No openings at the moment</p>
            <p className="text-gray-500 text-sm">
              We're not actively hiring right now, but check back soon.
            </p>
          </div>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="border border-gray-800 p-8 rounded-xl space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h4 className="text-xl">{job.title}</h4>
                <span className="text-sm text-gray-400">
                  {job.type} • {job.location}
                </span>
              </div>

              <p className="text-gray-400">{job.description}</p>

              <button
                onClick={() => setOpenForm(openForm === job.id ? null : job.id)}
                className="mt-4 px-6 py-3 bg-white text-black rounded-lg text-sm hover:bg-gray-200 transition"
              >
                Apply Now
              </button>

              {openForm === job.id && (
                <form
                  action={async (formData) => {
                    formData.append("jobTitle", job.title);
                    const res = await applyForJob(formData);
                    if (res.success) {
                      setSuccess(job.id);
                      setOpenForm(null);
                    }
                  }}
                  className="mt-8 space-y-4 border-t border-gray-800 pt-8"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="firstName" placeholder="First name" required className="bg-black border border-gray-700 p-3 rounded-lg"/>
                    <input name="lastName" placeholder="Last name" required className="bg-black border border-gray-700 p-3 rounded-lg"/>
                  </div>
                  <input name="email" type="email" placeholder="Email" required className="w-full bg-black border border-gray-700 p-3 rounded-lg"/>
                  <input name="phone" placeholder="Phone" className="w-full bg-black border border-gray-700 p-3 rounded-lg"/>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="country" placeholder="Country" className="bg-black border border-gray-700 p-3 rounded-lg"/>
                    <input name="location" placeholder="City" className="bg-black border border-gray-700 p-3 rounded-lg"/>
                  </div>
                  <textarea
                    name="coverLetter"
                    placeholder="Write your cover letter here..."
                    rows={5}
                    className="w-full bg-black border border-gray-700 p-3 rounded-lg"
                  />
                  <div>
                    <label className="text-sm text-gray-400 block mb-2">Upload CV (PDF or DOC)</label>
                    <input
                      type="file"
                      name="cv"
                      required
                      accept=".pdf,.doc,.docx"
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-white file:text-black file:rounded-md"
                    />
                  </div>
                  <button className="w-full py-3 bg-white text-black rounded-lg hover:bg-gray-200">
                    Submit Application
                  </button>
                </form>
              )}

              {success === job.id && (
                <p className="text-green-400 mt-4">Application sent successfully</p>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}