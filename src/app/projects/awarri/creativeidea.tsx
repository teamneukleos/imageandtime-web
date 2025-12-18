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
          The creative idea for the Awarri brand centers on building a 
          cohesive and future‑ready identity that reflects innovation, 
          trust, and cultural relevance. Beginning with a comprehensive 
          brand audit, the strategy will uncover strengths, gaps, and 
          opportunities, leading to a clearly defined brand essence that 
          connects authentically with its audience. This essence will be 
          expressed through a thoughtful brand design and architecture that 
          ensures consistency across all touchpoints. To bring the vision to 
          life, a detailed brand identity manual will be developed, featuring 
          a distinctive logo, a vibrant yet professional colour palette, carefully 
          chosen typography, and a unified voice and style. Together, 
          these elements will establish Awarri as a brand with clarity, personality, 
          and impact, enabling it to stand out and resonate in the market.
        </p>

        
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto mb-28 flex justify-center">
        <img
          src="/awarri/awarri.png"
          alt="Creative Idea Image"
          className="w-full md:w-auto max-w-full h-auto object-cover"
        />
      </div>


    </section>
  );
}
