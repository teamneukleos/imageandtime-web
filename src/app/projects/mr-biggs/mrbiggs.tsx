"use client";

import React from "react";
import Image from "next/image";

const MrBiggsContent = () => {
  return (
    <section className="w-full bg-[#111111] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Mr Biggs
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Where memories meet meals.
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
           Build a bold, cheerful brand identity and visual system that repositions Mr Bigg’s as Nigeria’s iconic quick service restaurant, blending its proud heritage with modern relevance to inspire trust, nostalgia, and everyday enjoyment for families and communities.
          </p>
        </div>

        {/* IMAGE SECTION */}
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/mr-biggs/mr-biggs-bg.jpg"
                    alt="Mr biggs Image"
                    fill
                    className="object-cover"
                  />
                </div>

        
      </div>
    </section>
  );
};

export default MrBiggsContent;