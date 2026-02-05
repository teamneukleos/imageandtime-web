"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#111111] pt-0 md:pt-0 pb-16 md:pb-32 px-6 md:px-12">
      {/* ABOUT */}
      <div className="max-w-5xl mx-auto mb-20 mt-0">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">About M36</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            M36 is a value proposition by Union Bank hinged on solving the need
            for personalized online investment services. This platform is
            designed to conveniently assist individuals in growing, managing and
            preserving their wealth through the provision of personalized
            digital concierge services, exclusive club(s)/rewards, investment
            products, to help HNIs and UHNIs meet their financial goals.
          </p>
        </div>
      </div>

      {/* TASK */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">The Task</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            To brand Union Bank's investment app from naming to brand strategy,
            develop a bespoke and compelling brand and launch for M36, and
            create always-on digital content to drive sustained engagement
            across platforms.
          </p>
        </div>
      </div>

      {/* CREATIVE IDEA */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Creative Idea</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            M36 was positioned as a trusted digital concierge designed for a
            new class of affluent individuals who value discretion, access,
            and intelligent wealth management. The idea focused on simplicity,
            exclusivity, and confidence, presenting M36 as a seamless gateway
            to premium financial services tailored to individual lifestyles.
          </p>
        </div>
      </div>

      {/* LOGO CONCEPT */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Logo Concept</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The M36 logo was designed to reflect precision, structure, and
            balance. The form draws inspiration from growth, stability, and
            continuity, reinforcing the idea of long term wealth preservation
            and intelligent financial planning.
          </p>
        </div>
      </div>

      {/* SKETCHES */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/m36/sketch1.png"
            alt="Logo sketch exploration"
            className="w-full h-auto object-cover"
          />
          <img
            src="/m36/sketch3.png"
            alt="Logo sketch refinement"
            className="w-full h-auto object-cover"
          />
          <img
            src="/m36/sketch4.png"
            alt="Logo sketch refinement"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* LOGO JOURNEY */}
<div className="max-w-5xl mx-auto mb-28">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
    {["/m36/logo-journey1.png", "/m36/logo-journey3.png"].map(
      (src, index) => (
        <div
          key={index}
          className="w-full h-[280px] md:h-[320px] bg-gray-100 flex items-center justify-center"
        >
          <img
            src={src}
            alt="Logo design journey"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )
    )}
  </div>
</div>

      <div className="max-w-5xl mx-auto mb-28 flex justify-center">
        <img
          src="/m36/logo-journey4.png"
          alt="Logo design journey"
          className="w-full max-w-5xl h-auto object-cover"
        />
      </div>

      {/* LOGO COLOUR EXPLORATION */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Logo colour exploration
          </h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The colour palette was carefully selected to communicate wealth,
            trust, and exclusivity. Deep, refined tones were used to signal
            premium value while maintaining a modern and digital forward feel.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-28 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/m36/logo-color2.png"
          alt="Logo color exploration"
          className="w-full h-auto object-cover"
        />
        <img
          src="/m36/logo-color1.png"
          alt="Logo color exploration"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* LOGO PATTERN */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Logo pattern</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The logo pattern extends the identity by creating a flexible visual
            system that can be applied across digital and physical touchpoints.
            It reinforces brand recognition while adding visual depth and
            consistency.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-28 flex justify-center">
        <img
          src="/m36/m36-logo-pattern.gif"
          alt="Logo pattern animation"
          className="w-full max-w-5xl h-auto object-cover"
        />
      </div>

      {/* FINAL LOGO */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Final Logo</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The final M36 logo represents clarity, confidence, and refined
            sophistication. It is designed to perform seamlessly across digital
            interfaces, print applications, and motion assets.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-28 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="w-full aspect-[3/2] bg-black flex items-center justify-center">
          <img
            src="/m36/m36-final-logo.png"
            alt="Final logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-full aspect-[3/2] bg-white flex items-center justify-center">
          <img
            src="/m36/m36-logo.gif"
            alt="Logo animation"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* BRAND EXTENSIONS */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Brand Extensions</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The M36 identity was extended across cards, promotional materials,
            and lifestyle assets to create a cohesive and premium brand
            experience. Each application reinforces exclusivity, quality, and
            attention to detail.
          </p>
        </div>
      </div>

      {/* BRAND IMAGES */}
      <div className="max-w-5xl mx-auto mb-28 space-y-16">
        {/* First 3 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img
            src="/m36/m36card.png"
            alt="m36 card"
            className="w-full h-auto object-cover"
          />
          <img
            src="/m36/m36-card2.png"
            alt="Brand visual"
            className="w-full h-auto object-cover"
          />
          <img
            src="/m36/m36-card3.png"
            alt="Billboard application"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Remaining 4 Images (2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/m36/promotional-items1.png"
            alt="Promotional item 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/m36/promotional-items2.png"
            alt="Promotional item 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/m36/promotional-items3.png"
            alt="Promotional item 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/m36/promotional-items4.png"
            alt="Promotional item 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}