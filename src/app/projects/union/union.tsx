"use client";

import React from "react";

const UnionContent = () => {
  return (
    <section className="w-full bg-[#111111] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER  */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Union Bank – M36 Investment App
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Banking, but for my generation
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Reposition Union Bank for a younger, digitally savvy audience by creating a modern sub-brand and identity system that drives adoption, relevance, and trust in digital investing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnionContent;