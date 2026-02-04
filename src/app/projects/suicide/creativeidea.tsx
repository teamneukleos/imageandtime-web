import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#111111] py-28 px-6 md:px-12">
      
      {/* SECTION TEXT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          
          {/* The Problem */}
          <h2 className="text-xl font-semibold text-white">The Problem</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Nigeria has one of the highest suicide rates in Africa, yet suicide 
            is often dismissed as un-Nigerian or a sign of weakness. This stigma 
            prevents open conversation and delays intervention. 
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Many people seeking answers turn to the internet instead of professional help.

          </p>


          {/* Insight */}
          <h2 className="text-xl font-semibold text-white mt-6">Insight</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Survivors are powerful prevention tools.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Statistics show that nine out of ten people who survive a suicide attempt never try again. Their stories can save lives if shared honestly.
          </p>

          {/* Big Idea */}
          <h2 className="text-xl font-semibold text-white mt-6">Big Idea</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            <strong>THE SUICIDE REVIEW</strong><br />
            We applied review culture to suicide prevention. 
          </p>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Led by Real Warri Pikin, a survivor herself, we created a platform where Nigerians who attempted suicide shared honest reviews of the experience. Not to shock, but to warn, educate, and prevent.

          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            By reframing survival as expertise, the campaign challenged stigma and created a resource rooted in lived truth.

          </p>

        </div>
      </div>

      {/* METRICS SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-12">
        <div>
          <p className="text-white text-base mb-2">Impressions</p>
          <p className="text-[#CC111A] text-3xl font-semibold">53M+</p>
        </div>

        <div>
          <p className="text-white text-base mb-2">Reach</p>
          <p className="text-[#CC111A] text-3xl font-semibold">10M+</p>
        </div>

        <div>
          <p className="text-white text-base mb-2">Views/Plays</p>
          <p className="text-[#CC111A] text-3xl font-semibold">1M+</p>
        </div>
      </div>
    </section>
  );
}
