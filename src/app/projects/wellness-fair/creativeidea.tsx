"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-14 md:py-28 px-6 md:px-12">
      
      {/* SECTION TEXT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Creative Idea
          </h2>

          <p className="text-gray-300 leading-relaxed">
            The Seplat Wellness Fair in December 2025 reimagined the 
            former Mobil parking lot into a lively sanctuary of health, 
            energy, and connection. For three hours, the space pulsed 
            with color, music, and movement as colleagues immersed 
            themselves in gamified wellness challenges, playful fitness 
            activities, and interactive stations designed to spark joy 
            and mindfulness. From laughter-filled team games to calming 
            recharge zones, every detail was crafted to help participants reset their minds, reconnect with one another, and recharge their spirits. The fair wasn’t just an event—it was a celebration of appreciation, leaving the Seplat team invigorated, motivated, and ready to embrace the year ahead with renewed purpose.The Seplat Wellness Fair in December 2025 reimagined the former Mobil parking lot into a lively sanctuary of health, energy, and connection. For three hours, the space pulsed with color, music, and movement as colleagues immersed themselves in gamified wellness challenges, playful fitness activities, and interactive stations designed to spark joy and mindfulness. From laughter-filled team games to calming recharge zones, every detail was crafted to help participants reset their minds, reconnect with one another, and recharge their spirits. The fair wasn’t just an event—it was a celebration of appreciation, leaving the Seplat team invigorated, motivated, and ready to embrace the year ahead with renewed purpose.
          </p>
        </div>
      </div>

       {/* IMAGE - CENTERED */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-0">
        <img src="/wellness-fair/img1.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/wellness-fair/img2.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/wellness-fair/img3.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/wellness-fair/img4.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/wellness-fair/img5.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/wellness-fair/img6.jpg" alt="Creative Idea Image" className="w-full object-cover" />
      </div>


    </section>
  );
}