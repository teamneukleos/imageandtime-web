"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-14 md:py-28 px-6 md:px-12">
      
      {/* SECTION TEXT - ALIGNED WITH SUBSURFACE CONTENT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Creative Idea
          </h2>

          <p className="text-gray-300 leading-relaxed">
            The creative idea for Seplat's Corporate Subsurface Team Retreat was to design a rejuvenating experience that balanced mental and physical renewal while fostering stronger collaboration. Hosted at the scenic Lakowe Golf Resort, the two‑day retreat provided an inspiring backdrop for participants to bond, unwind, and connect outside the usual corporate setting. Through carefully curated team activities focused on strategy, teamwork, planning, and cohesion, the program encouraged open collaboration and strengthened interpersonal ties, ensuring the team returned energized, aligned, and better equipped to drive collective success.  
          </p>
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-0">
        <img src="/subsurface/img1.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/subsurface/img2.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/subsurface/img3.png" alt="Creative Idea Image" className="w-full object-cover" />
      </div>

    </section>
  );
}