import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-28 px-6 md:px-12">
      {/* SECTION TEXT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Creative Idea</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            There are several elements and important personas that make 
            a party, a gathering or an event either fun, exciting or boring. 
            They all play a key role in bringing life to the party. We began 
            by sparking controversial and yet fun, engaging debates around the topic: 
            Can a party survive without water? Yes or No. The campaign aimed to establish 
            Nestlé Pure Life as the Life of the Party, breaking new ground with its first 
            ever thematic advertising campaign in Nigeria. 
          </p>
        </div>
      </div>

      
      {/* METRICS SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-12">
        {/* Impressions */}
        <div>
          <p className="text-white text-base mb-2">Impressions</p>
          <p className="text-[#CC111A] text-3xl font-semibold">6M+</p>
        </div>

        {/* Reach */}
        <div>
          <p className="text-white text-base mb-2">Reach</p>
          <p className="text-[#CC111A] text-3xl font-semibold">5M+</p>
        </div>

        {/* Views / Plays */}
        <div>
          <p className="text-white text-base mb-2">Views/Plays</p>
          <p className="text-[#CC111A] text-3xl font-semibold">200k+</p>
        </div>
      </div>
    </section>
  );
}