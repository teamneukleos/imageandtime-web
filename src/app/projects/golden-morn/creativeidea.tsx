"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-14 md:py-28 px-6 md:px-12 ">
      
      {/* SECTION TEXT */}
      <div className="max-w-4xl mx-auto space-y-6 mb-20">
        <h2 className="text-xl font-semibold text-white">
          Creative Idea
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Golden Morn is the number one breakfast brand in Nigeria, with the aim
          of fuelling individuals and families to win. To maintain our
          positioning, we set out to find a unique way to enhance the brand’s
          digital presence, expand its online community, and reach and interact
          with its audience in their places and moments of resonance.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Recognizing the power of entertainment, while leveraging an
          opportunity for thought leadership, we conceived the idea of a
          podcast. The podcast serves as an innovative approach to expand the
          digital presence of Golden Morn, providing fresh avenues for
          interaction with our audience.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
        <img src="/golden-morn/img1.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/golden-morn/img2.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/golden-morn/img3.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/golden-morn/img4.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/golden-morn/img5.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/golden-morn/img6.png" alt="Creative Idea Image" className="w-full object-cover" />
      </div>

      {/* METRICS SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-12">
        {/* Impressions */}
        <div>
          <p className="text-white text-base mb-2">Impressions</p>
          <p className="text-[#CC111A] text-3xl font-semibold">56 M+</p>
        </div>

        {/* Reach */}
        <div>
          <p className="text-white text-base mb-2">Reach</p>
          <p className="text-[#CC111A] text-3xl font-semibold">11 M+</p>
        </div>

        {/* Views / Plays */}
        <div>
          <p className="text-white text-base mb-2">Views/Plays</p>
          <p className="text-[#CC111A] text-3xl font-semibold">1.8 M</p>
        </div>
      </div>

    </section>
  );
}
