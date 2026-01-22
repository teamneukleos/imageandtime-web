"use client";

import React from "react";
import Image from "next/image";

const SubsurfaceContent = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER (aligns text with image) */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Seplat – Subsurface & Geosciences Retreat
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Unlocking our superpowers
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Re-energise teams and improve strategic thinking through themed experiential learning that fosters problem-solving, teamwork, and renewed motivation.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/subsurface/subsurface-image.png"
            alt="Campaign Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SubsurfaceContent;