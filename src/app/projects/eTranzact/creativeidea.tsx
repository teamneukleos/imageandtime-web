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
          The creative idea for eTranzact was to transform the brand into a bold, modern financial services identity that could spark a fresh conversation with its audience. By developing a comprehensive branding and design system, the intervention extended across every touchpoint — from signage and print to digital platforms, web presence, advertising, and marketing collateral. This holistic approach ensured consistency and impact, positioning eTranzact as a forward‑thinking brand that not only delivers trusted financial solutions but also communicates with clarity, confidence, and relevance in today’s competitive market.
        </p>

        
      </div>

      {/* IMAGE GRID */}
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          gap-6 
          mb-28
        "
      >
        <img
          src="/eTranzact/img1.png"
          alt="Creative Idea Image"
          className="w-full h-auto object-cover"
        />
        <img
          src="/eTranzact/img2.png"
          alt="Creative Idea Image"
          className="w-full h-auto object-cover"
        />
      </div>


    </section>
  );
}
