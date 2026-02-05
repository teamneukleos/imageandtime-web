"use client";
import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#111111] pt-[-16px] pb-12 px-6 md:px-12">
      {/* ABOUT */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            About Mr Bigg’s
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Mr Bigg’s is one of Nigeria’s first and most iconic quick service
            restaurant brands, founded in 1986. Over the years, the brand has
            grown to over 170 outlets nationwide, delivering delicious meals
            with consistency, warmth, and quality.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The brand continues to evolve with changing consumer lifestyles,
            focusing on digital innovation, service excellence, and customer
            satisfaction while maintaining its proud Nigerian heritage.
          </p>
        </div>
      </div>

      {/* BRAND VOICE */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Brand Voice
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Mr Bigg’s communicates in a professional, friendly, and wholesome
            manner. The brand voice is down-to-earth, honest, cheerful, and
            inclusive, reflecting its family-oriented nature.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Every communication prioritizes sincerity, clarity, and warmth,
            ensuring customers always feel welcomed and valued.
          </p>
        </div>
      </div>

      {/* DESIGN TONE */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Design Tone
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The Mr Bigg’s design tone is clean, bold, and honest. It reflects a
            proudly Nigerian identity while competing confidently with global
            brands.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            All visual materials work together to create a consistent and
            recognizable presence in a highly competitive environment.
          </p>
        </div>
      </div>

      {/* BRAND EVOLUTION */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Brand Evolution
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            From its early beginnings in 1986, Mr Bigg’s has undergone several
            transformations to meet modern consumer expectations.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The brand refreshed its logo, service model, and digital presence
            to remain relevant while maintaining its human-centered approach.
          </p>
        </div>
      </div>

      {/* LOGO CONCEPT */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Logo Concept
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The Mr Bigg’s logo features the iconic “Bigg B” symbol combined with
            the Cubano wordmark. It represents joy, quality, and long-standing
            brand recognition.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The logo must always be used in accordance with spacing, size, and
            colour guidelines to ensure consistency.
          </p>
        </div>
      </div>

      {/* LOGO CONCEPT */}
<div className="max-w-5xl mx-auto mb-16">
  <div className="max-w-4xl space-y-6">
    <h2 className="text-xl font-semibold text-white">
      Logo Concept
    </h2>

    <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
      The Mr Bigg’s logo features the iconic “Bigg B” symbol combined with
      the Cubano wordmark. It represents joy, quality, and long-standing
      brand recognition.
    </p>

    <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
      The logo must always be used in accordance with spacing, size, and
      colour guidelines to ensure consistency.
    </p>
  </div>
</div>

{/* LOGO SKETCHES */}
<div className="max-w-5xl mx-auto mb-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
    {[
      "/mr-biggs/logo-concept1.png",
      "/mr-biggs/logo-concept2.png",
    ].map((src, index) => (
      <div
        key={index}
        className="w-full aspect-[3/2] bg-white flex items-center justify-center"
      >
        <img
          src={src}
          alt="Logo sketch"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    ))}
  </div>
</div>


      
      {/* TYPOGRAPHY */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Typography
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Cubano is used for headings while Neue Haas Display is used for body
            text. Arial serves as the fallback font for internal documents.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Typography reinforces clarity, readability, and brand personality.
          </p>
        </div>
      </div>

      {/* VISUAL PATTERNS */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Visual Patterns
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Custom pictograms and patterns create visual interest and enhance
            brand recognition across touchpoints.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-28 flex">
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          <div className="w-full h-full flex items-center bg-transparent">
            <img
              src="/mr-biggs/visual-pattern-1 copy.png"
              alt="Visual pattern primary"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full h-full flex items-center bg-transparent">
            <img
              src="/mr-biggs/visual-pattern-2.png"
              alt="Visual pattern secondary"
              className="w-full h-full object-contain"
            />
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
            The final logo reflects Mr Bigg’s heritage, confidence, and modern
            outlook. It is optimized for print, digital, and environmental
            applications.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-28 flex flex-col sm:flex-row justify-center items-center gap-8">
        <img
          src="/mr-biggs/image.png"
          alt="Final logo"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>

      {/* BRAND APPLICATIONS */}
<div className="max-w-5xl mx-auto mb-16">
  <div className="max-w-4xl space-y-6">
    <h2 className="text-xl font-semibold text-white">
      Brand Applications
    </h2>

    <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
      Mr Bigg’s identity extends across packaging, uniforms, signage,
      vehicles, menus, and digital platforms.
    </p>

    <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
      Each application reinforces brand consistency and customer trust.
    </p>
  </div>
</div>

{/* BRAND IMAGES */}
<div className="max-w-5xl mx-auto mb-28 space-y-16">
  {/* UNIFORMS */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {[
      "/mr-biggs/uniform-1.png",
      "/mr-biggs/uniform-2.jpg",
      "/mr-biggs/uniform-3.jpg",
      "/mr-biggs/uniform-4.jpg",
      "/mr-biggs/uniform-5.png",
      "/mr-biggs/uniform-6.png",
    ].map((src, index) => (
      <div
        key={index}
        className="relative w-full aspect-[4/3] overflow-hidden"
      >
        <img
          src={src}
          alt="Uniform"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  {/* PACKAGING / OFFICE / STORE */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {[
      "/mr-biggs/packaging-1.png",
      "/mr-biggs/packaging-2.png",
      "/mr-biggs/packaging-3.jpg",
      "/mr-biggs/packaging-4.png",
      "/mr-biggs/office-1.jpg",
      "/mr-biggs/office-2.jpg",
    ].map((src, index) => (
      <div
        key={index}
        className="relative w-full aspect-[16/10] overflow-hidden"
      >
        <img
          src={src}
          alt="Brand application"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
