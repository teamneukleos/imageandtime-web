"use client";

import React from "react";
import Image from "next/image";

const LucozadeContent = () => {
  return (
    <section className="w-full bg-[#111111] py-32 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
          Lucozade - The energy to do you 
        </h1>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
          Lucozade is Nigeria’s energy brand, with the aim of powering daily strivers to achieve more while rewarding them instantly.
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-5xl mx-auto relative aspect-video rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/lucozade/lucozade.png"
          alt="Lucozade Campaign Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default LucozadeContent;