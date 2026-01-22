"use client";

import React from "react";
import Image from "next/image";

const ProjectRetreatContent = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER (aligns text with image) */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Seplat – Engineering & Projects Retreat
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Back to our roots
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Strengthen team bonds and communication by using culturally grounded experience design to reinforce unity, shared identity, and collaboration.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/project-retreat/project-retreat.png"
            alt="Campaign Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectRetreatContent;