import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-28 px-6 md:px-12">
      {/* SECTION TEXT */}
      <div className="max-w-4xl mx-auto space-y-6 mb-20 mt-[-50px]">
        <h2 className="text-xl font-semibold text-white">Creative Idea</h2>
        <p className="text-gray-300 leading-relaxed">
          Union Bank’s brand journey begins with a deep commitment to truly understanding 
          the consumer and unlocking insights that reveal what matters most to them. 
          By unearthing the brand’s DNA — its core benefits and reasons to believe — the bank can 
          articulate a powerful essence that connects directly with people’s lives. 
          This essence defines Union Bank’s role and personality, positioning it not just as a 
          financial institution but as a trusted partner that reflects the aspirations, values, 
          and everyday realities of its customers.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Building on this foundation, the strategy focuses on 
          repositioning the brand to address perception challenges 
          and strengthen relevance in a competitive market.
           By reframing how consumers see Union Bank, the approach 
           emphasizes authenticity, trust, and innovation, while driving 
           user acquisition and loyalty. The result is a brand that evolves with consumer expectations, reinforces its heritage, and builds stronger emotional bonds — ensuring Union Bank remains a modern, dependable choice for generations to come.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          gap-6 
          mb-28
        "
      >
        <img
          src="/union/img1.png"
          alt="Creative Idea Image"
          className="w-full h-auto object-cover"
        />
        <img
          src="/union/img2.png"
          alt="Creative Idea Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* METRICS SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-12">
        {/* Impressions */}
        <div>
          <p className="text-white text-base mb-2">Impressions</p>
          <p className="text-[#CC111A] text-3xl font-semibold">53M+</p>
        </div>

        {/* Reach */}
        <div>
          <p className="text-white text-base mb-2">Reach</p>
          <p className="text-[#CC111A] text-3xl font-semibold">10M+</p>
        </div>

        {/* Views / Plays */}
        <div>
          <p className="text-white text-base mb-2">Views/Plays</p>
          <p className="text-[#CC111A] text-3xl font-semibold">1M+</p>
        </div>
      </div>
    </section>
  );
}