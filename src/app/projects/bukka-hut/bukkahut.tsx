"use client";

import React from "react";
import Image from "next/image";

const BukkaHutContent = () => {
  return (
    <section className="w-full bg-[#111111] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Bukka hut
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Lorem ipsum
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/bukka-hut/bukka-hut.jpg"
            alt="Bukka Hut Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BukkaHutContent;