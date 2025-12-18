"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-14 md:py-28 px-6 md:px-12 ">
      
      {/* SECTION TEXT */}
      <div className="max-w-4xl mx-auto space-y-6 mb-20 mt-[-50px]">
        <h2 className="text-xl font-semibold text-white">
          Creative Idea
        </h2>

        <p className="text-gray-300 leading-relaxed">
          The creative idea for Union Bank’s investment app, 
          M36, is to craft a distinctive brand identity that positions 
          it as a modern, trusted, and empowering financial companion. 
          From naming to strategy, the brand will be built to reflect 
          innovation, accessibility, and confidence, ensuring it resonates 
          with both seasoned investors and first‑time users. A bespoke 
          launch will introduce M36 with compelling storytelling that 
          highlights its unique value proposition, while an always‑on 
          digital content strategy will sustain engagement, educate users,
           and reinforce brand presence across platforms. Together, these 
           elements will establish M36 as more than an app — a dynamic investment brand that inspires growth and trust in the digital era.

        </p>

        
      </div>

        {/* IMAGE GRID */}
         <div className="max-w-6xl mx-auto mb-28 flex justify-center">
        <img
          src="/m36/img1.png"
          alt="Creative Idea Image"
          className="w-full md:w-auto max-w-full h-auto object-cover"
        />
      </div>



    </section>
  );
}
