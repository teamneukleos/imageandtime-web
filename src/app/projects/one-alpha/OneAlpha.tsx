"use client";

import React from "react";
import Image from "next/image";

const OneAlphaContent = () => {
  return (
    <section className="w-full bg-[#111111] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            One Alpha
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Arrive in style.
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            To position OneAlpha as the leader in premium road transportation by delivering safe, stylish, and comfortable journeys that inspire confidence and loyalty through luxury service and innovation.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/one-alpha/onealpha.png"
            alt="One Alpha Image"
            fill
            className="object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default OneAlphaContent;