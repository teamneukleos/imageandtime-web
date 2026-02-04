"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#111111] py-14 md:py-28 px-6 md:px-12">
      
      {/* SECTION TEXT  */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Creative Idea
          </h2>

          <p className="text-gray-300 leading-relaxed">
            The creative idea for Ribena's refreshed tetra pack design was to transform 
            everyday juice cartons into vibrant, engaging experiences that stand out on 
            the shelf. By using bold solid background colours — purple for Blackcurrant and red for Strawberry — the packs became instantly eye‑catching while also being practical, as the colours made them less prone to visible stains. To add energy and contrast, dynamic splashes were incorporated into the design, giving the packs a lively, modern feel.
          </p>
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-3xl mx-auto mb-28 flex justify-center">
        <img
          src="/ribena/img1.png"
          alt="Creative Idea Image"
          className="w-full md:w-auto max-w-full h-auto object-cover"
        />
      </div>

    </section>
  );
}