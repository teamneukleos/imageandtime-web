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
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
        </p>

        
      </div>

        {/* IMAGE GRID */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-0">
        <img src="/seplat/img1.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/seplat/img2.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/seplat/img3.png" alt="Creative Idea Image" className="w-full object-cover" />
      </div>



    </section>
  );
}
