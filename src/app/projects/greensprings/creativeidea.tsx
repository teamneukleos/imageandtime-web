"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-14 md:py-28 px-6 md:px-12">
      
      {/* SECTION TEXT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          
          {/* The Problem */}
          <h2 className="text-xl font-semibold text-white">The Problem</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            For its 40th anniversary, Greensprings School needed a campaign that celebrated its legacy without feeling nostalgic or distant from the present. The challenge was to honor the past while inspiring the future.
          </p>

          {/* Insight */}
          <h2 className="text-xl font-semibold text-white mt-6">Insight</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            A school’s true legacy lives through its students. Values endure when they are passed on, not just remembered.
          </p>

          {/* Big Idea */}
          <h2 className="text-xl font-semibold text-white mt-6">Big Idea</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            <strong>EVERGREEN</strong><br />
            We told the story through the voices of current students. Using spoken word, the film connected generations, weaving together tradition, achievement, and community. Students became the bridge between the school’s past and its future, bringing its values to life through lived experience. The result was a celebration that felt authentic, emotional, and forward-looking, positioning Greensprings as a place where heritage and progress coexist.
          </p>

        </div>
      </div>
      
    </section>
  );
}
