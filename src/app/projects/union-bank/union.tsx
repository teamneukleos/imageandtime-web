"use client";

import React from "react";
import Image from "next/image";

const UnionContent = () => {
  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER (aligns text with image) */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Union bank - Enabling Success
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Documenting the Nigerian struggle
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Position Union Bank as an empathetic enabler of everyday Nigerians by
            showing deep understanding of real struggles, while reinforcing the
            brand’s role in helping people rise, progress, and succeed despite
            systemic challenges.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/union/union-bank.png"
            alt="Union Bank Campaign Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default UnionContent;
