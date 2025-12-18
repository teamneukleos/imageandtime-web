"use client";

import React from "react";
import Image from "next/image";

const SeplatContent = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
         Seplat – New Energy Team Away Day
        </h1>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
           Trust the process
        </p>

        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
          Brand/Business objective
        </h1>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
           Lay the foundation for trust within a newly formed team, improving collaboration, communication, and alignment during a critical phase of organisational change.
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-5xl mx-auto relative aspect-video rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/seplat/seplat.png"
          alt=" Campaign Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default SeplatContent;