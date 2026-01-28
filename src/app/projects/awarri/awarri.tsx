"use client";

import React from "react";
import Image from "next/image";

const AwarriContent = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Awarri – Africa's Robotics & AI Brand
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            The future looks African
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Craft a bold, credible brand identity and visual system that positions Awarri as Africa's leading robotics and AI company, while inspiring confidence, legitimacy, and ambition at a global level.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/awarri/awarri4.png"
            alt="Awarri Campaign Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AwarriContent;