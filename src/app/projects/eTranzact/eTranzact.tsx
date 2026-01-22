"use client";

import React from "react";
import Image from "next/image";

const eTranzactContent = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER (aligns text with image) */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            eTranzact 
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Serious tech, finally explained
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Clarify and modernise the brand's identity and communication system to make complex financial infrastructure feel accessible, trustworthy, and relevant to everyday users.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/eTranzact/etranzact.png"
            alt="eTranzact Campaign Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default eTranzactContent;