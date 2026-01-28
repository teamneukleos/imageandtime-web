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

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            We launched "One Less Worry. One More Reason to Feel at Home", a fully integrated campaign rooted 
            in storytelling and cultural resonance. On-air, the initiative featured 
            TVCs and in-show integrations that highlighted authentic family scenarios, 
            demonstrating how inverter appliances ease daily stress and bring comfort into everyday life. 
            To extend engagement beyond traditional media, we introduced a guerrilla scavenger hunt during peak moments like the Saturday night party, 
            where hidden clues unlocked exciting rewards and created memorable digital/BBN interactions.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The campaign also leaned heavily on influencer storytelling, led by Stan Nze, who shared relatable slice-of-life narratives centered on comfort, 
            trust, and energy efficiency. On social media, activations such as polls, memes, and behind-the-scenes content reframed appliances as more than functional machines, 
            positioning them as integral to emotional family life. Together, these elements built a cohesive narrative that connected with audiences on multiple levels, blending entertainment,
            interactivity, and cultural relevance.
          </p>
        </div>
      </div>


      {/* METRICS SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-12">
        {/* Impressions */}
        <div>
          <p className="text-white text-base mb-2">Impressions</p>
          <p className="text-[#CC111A] text-3xl font-semibold">37M+</p>
        </div>

        {/* Reach */}
        <div>
          <p className="text-white text-base mb-2">Reach</p>
          <p className="text-[#CC111A] text-3xl font-semibold">22M+</p>
        </div>

        {/* Views / Plays */}
        <div>
          <p className="text-white text-base mb-2">Views/Plays</p>
          <p className="text-[#CC111A] text-3xl font-semibold">17M+</p>
        </div>
      </div>

    </section>
  );
}