"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] pt-14 pb-24 sm:pb-20 md:pt-28 md:pb-28 px-6 md:px-12">
      
      {/* SECTION TEXT */}
      <div className="max-w-4xl mx-auto space-y-6 mb-20">
        <h2 className="text-xl font-semibold text-white">
          Creative Idea
        </h2>

        <p className="text-gray-300 leading-relaxed">
          We live in a world where people increasingly desire to express
          themselves. People tweet their thoughts, instagram their lunch and
          facebook their locations. Ours is a generation that places a premium
          on brands that allow them to be and express themselves. Based on this
          cultural reality, we came up with the campaign, “200 million reasons to
          do you”.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The campaign also leaned heavily on influencer storytelling, led by
          Stan Nze, who shared relatable slice-of-life narratives centered on
          comfort, trust, and energy efficiency.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-0">
        <img src="/lucozade/img1.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/lucozade/img2.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/lucozade/img3.png" alt="Creative Idea Image" className="w-full object-cover" />
      </div>

    </section>
  );
}
