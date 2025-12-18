"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-14 md:py-28 px-6 md:px-12 ">
      
      {/* SECTION TEXT */}
      <div className="max-w-4xl mx-auto space-y-6 mb-20 mt-[-50px]">
        <h2 className="text-xl font-semibold text-white">
          Creative Idea
        </h2>

        <p className="text-gray-300 leading-relaxed">
          The creative idea for First E&P’s team‑building session was to build on the momentum of their successful corporate retreat in November 2021 and channel that energy into preparing a high‑spirited, can‑do community. Designed to inspire confidence and optimism, the session focused on leveraging current successes and strong performance as a foothold for an even bigger, more vibrant future.  

Through dynamic activities and shared experiences, the program fostered collaboration, encouraged open dialogue, and culminated in engaging town hall sessions and memorable team presentations. This holistic approach not only strengthened bonds within the leadership team but also reinforced a culture of unity, resilience, and forward‑thinking — positioning First E&P to embrace its next chapter with collective strength and enthusiasm.  

        </p>

        
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto mb-28 flex justify-center">
        <img
          src="/employee-awayday/img1.png"
          alt="Creative Idea Image"
          className="w-full md:w-auto max-w-full h-auto object-cover"
        />
      </div>


    </section>
  );
}
