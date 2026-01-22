"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-14 md:py-28 px-6 md:px-12">
      
      {/* SECTION TEXT - ALIGNED WITH SEPLAT CONTENT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Creative Idea
          </h2>

          <p className="text-gray-300 leading-relaxed">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
          </p>
        </div>
      </div>

      {/* IMAGE GRID - STACKED VERTICALLY */}
      <div className="max-w-2xl mx-auto space-y-6 mb-4 md:mb-0">
        <img src="/seplat/img1.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/seplat/img2.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/seplat/img3.png" alt="Creative Idea Image" className="w-full object-cover" />
      </div>

    </section>
  );
}