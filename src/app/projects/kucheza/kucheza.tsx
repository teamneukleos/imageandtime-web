"use client";

import React from "react";
import Image from "next/image";

const KuchezaContent = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER (aligns text with image) */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Kucheza
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Where gaming meets culture
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Build a scalable brand identity and digital ecosystem that positions Kucheza as Africa's leading youth gaming and esports platform, blending play, learning, and community in a safe, inclusive way.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/kucheza/kucheza-brand.jpg"
            alt="Kucheza Campaign Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default KuchezaContent;