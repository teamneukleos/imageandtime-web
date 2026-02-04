import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#111111] py-28 px-6 md:px-12">
      {/* SECTION TEXT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">The Problem</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
          Water is essential at every gathering, yet it is often overlooked 
          and taken for granted. Nestlé Pure Life needed a more culturally 
          relevant role beyond utility.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
          The task was to give the brand an ownable place in social culture.

          </p>

          <h2 className="text-xl font-semibold text-white mt-6">Insight</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Every great party depends on water.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
           Without it, the energy fades and the moment ends. Water may not be the loudest element at a party, but it is what sustains everything.

          </p>

          <h2 className="text-xl font-semibold text-white mt-6">Big Idea</h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            <strong>LIFE OF THE PARTY</strong><br />
            We sparked a cultural debate. Can a party survive without water?
          </p>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The provocative question drove conversation, opinions, and participation, 
            placing water at the center of the moment. Through this idea, we reframed 
            Nestlé Pure Life not as a background necessity, but as the energy that keeps 
            the party alive.

          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The campaign became the brand’s first thematic advertising platform in Nigeria, 
            positioning Nestlé Pure Life as the life of the party with a clear and ownable story.


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
