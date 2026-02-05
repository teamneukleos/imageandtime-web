"use client";
import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#111111] pt-[-16px] pb-12 px-6 md:px-12">
      {/* ABOUT */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            About Bukka Hut
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Bukka Hut was founded in July 2011 to ensure lovers of Nigerian
            delicacies enjoy their favorite dishes in a relaxed and hygienic
            environment while maintaining the authentic "buka" appeal. Since
            then, the brand has expanded to restaurants, lounges, suya spots, an
            academy, and a pastry brand, all united under one vision.
          </p>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Mission & Vision
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            <strong>Mission:</strong> To create a platform that enables
            satisfaction and life-changing opportunities for all stakeholders.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            <strong>Vision:</strong> A proudly Nigerian brand that transforms
            lives.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            <strong>Values:</strong> Integrity, Make a difference, People
            empowerment, Assurance of quality, Customer satisfaction, and
            Ownership.
          </p>
        </div>
      </div>

      {/* CREATIVE IDEA */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Creative Idea
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Rooted in the archetypes of the Caregiver and the Everyman, Bukka
            Hut’s creative idea is to inspire warmth, empathy, and belonging.
            The brand strives to meet the needs of people, making everyone feel
            safe, appreciated, and at home.
          </p>
        </div>
      </div>

      {/* LOGO CONCEPT + SKETCHES */}
      <div className="max-w-5xl mx-auto mb-24">
        {/* LOGO CONCEPT */}
        <div className="space-y-6 mb-12">
          <h2 className="text-xl font-semibold text-white">
            Logo Concept
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The Bukka Hut logo combines the shade (thatched roof) and shadow
            (plate container), symbolizing comfort and nourishment. Strict rules
            for clear space, minimum size, and correct usage ensure consistency
            across all applications.
          </p>
        </div>

        {/* SKETCHES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {[
            "/bukka-hut/logo-concept-1.png",
            "/bukka-hut/logo-concept-2.png",
            "/bukka-hut/logo-concept-3.png",
            "/bukka-hut/logo-concept-4.png",
          ].map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[3/2] bg-white flex items-center justify-center"
            >
              <img
                src={src}
                alt="Logo sketch refinement"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LOGO COLOUR EXPLORATION */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Logo Colour Exploration
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The primary brand colours are Bukka Flame Orange (#FF6000), Black,
            and White. Secondary colours include Bukka Pepper Red, Tuscan
            Yellow, Brown, Lavender, Purple, Tiffany, and Midnight Green. These
            colours distinguish sub-brands like Lounge, Suya & Grills, Academy,
            and Chops.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-28 flex justify-center">
        <img
          src="/bukka-hut/logo-colors.png"
          alt="Logo colour exploration"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* TYPOGRAPHY */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Typography
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Bukka Hut uses Brume for headings, Kanit for subheadings and body
            text, and Billie Bob for display type. Typography rules emphasize
            sentence case, left alignment, proper tracking, and leading to
            ensure clarity and warmth.
          </p>
        </div>
      </div>

      {/* VISUAL PATTERNS */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Visual patterns
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* VISUAL PATTERNS GRID */}
      <div className="max-w-5xl mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          <div className="flex flex-col gap-6 md:h-[520px]">
            <img
              src="/bukka-hut/visual-pattern-1.png"
              alt="Visual pattern 1"
              className="w-full h-1/2 object-cover"
            />
            <img
              src="/bukka-hut/visual-pattern-2.jpg"
              alt="Visual pattern 2"
              className="w-full h-1/2 object-cover"
            />
          </div>

          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:h-[520px]">
            {[
              "/bukka-hut/visual-pattern-3.png",
              "/bukka-hut/visual-pattern-4.png",
              "/bukka-hut/visual-pattern-5.png",
              "/bukka-hut/visual-pattern-6.png",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Visual pattern ${index + 3}`}
                className="w-full h-auto md:h-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* FINAL LOGO */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Final Logo
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The final logo embodies Bukka Hut’s warmth and authenticity. It is
            versatile across print and digital platforms, with strict adherence
            to minimum size and clear space rules to ensure legibility and
            impact.
          </p>
        </div>
      </div>

      {/* FINAL LOGO IMAGES */}
      <div className="max-w-5xl mx-auto mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {[
            "/bukka-hut/final-logo.png",
            "/bukka-hut/final-logo2.png",
          ].map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[3/2] bg-white flex items-center justify-center"
            >
              <img
                src={src}
                alt="Final logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BRAND EXTENSIONS */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Brand Extensions
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Bukka Hut extends its brand identity across collaterals such as
            email signatures, stationery, uniforms, merchandise, vehicle
            branding, signage, packaging, and digital platforms. Each extension
            reinforces the brand’s consistent and homely image.
          </p>
        </div>
      </div>

      {/* BRAND IMAGES */}
      <div className="max-w-5xl mx-auto mb-28 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "uniform-1.jpg",
            "uniform-2.jpg",
            "uniform-3.png",
            "uniform-4.png",
            "uniform-5.png",
            "uniform-6.jpg",
            "uniform-7.png",
            "uniform-8.png",
            "jacket-1.jpg",
            "cap-1.png",
            "cap-2.png",
          ].map((file, index) => (
            <img
              key={index}
              src={`/bukka-hut/${file}`}
              alt="Brand application"
              className="w-full h-auto object-cover"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["cup.png", "dispatch.png", "bus.png", "storefront.png"].map(
            (file, index) => (
              <img
                key={index}
                src={`/bukka-hut/${file}`}
                alt="Brand application"
                className="w-full h-auto object-cover"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
