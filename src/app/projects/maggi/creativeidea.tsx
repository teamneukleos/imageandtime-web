import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">

        {/* SECTION TEXT */}
        <div className="max-w-4xl space-y-10">

          {/* THE PROBLEM */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
              The Problem
            </h3>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Recipe videos had become predictable and easy to scroll past.
              Cooking was often framed as stressful, repetitive, or routine,
              especially online.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Maggi needed a fresh way to engage younger audiences while
              reinforcing its role in making everyday cooking enjoyable.
            </p>
          </div>

          {/* INSIGHT */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
              Insight
            </h3>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Cooking already has rhythm.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              From chopping and sizzling to stirring and seasoning, the sounds
              of the kitchen naturally create beats. When framed creatively,
              cooking can feel expressive rather than exhausting.
            </p>
          </div>

          {/* BIG IDEA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
              Big Idea
            </h3>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">
                Cooking Is Music.
              </span>{" "}
              We turned cooking sounds into music.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              By blending Nigeria’s most popular genres such as Afrobeats,
              Amapiano, Highlife, and Afropop with step-by-step recipes, we
              transformed meals into musical performances. Chopping became
              percussion. Stirring became rhythm.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Working with producer Paul Cleverlee and Chef Debbie, we created
              full-length musical recipes made entirely from cooking sounds.
              Launched on YouTube and social platforms, the idea invited
              participation, sparking hundreds of user-generated cooking videos.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Beyond entertainment, the campaign positioned Maggi at the
              intersection of food and music culture, creating a fresh creative
              identity built for reels, TikTok, and digital-first storytelling.
            </p>
          </div>

        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-28">
        <img src="/maggi/img1.jpg" alt="Maggi campaign still" className="w-full h-auto object-cover" />
        <img src="/maggi/img2.jpg" alt="Maggi campaign still" className="w-full h-auto object-cover" />
        <img src="/maggi/img3.jpg" alt="Maggi campaign still" className="w-full h-auto object-cover" />
        <img src="/maggi/img4.jpg" alt="Maggi campaign still" className="w-full h-auto object-cover" />
        <img src="/maggi/img5.jpg" alt="Maggi campaign still" className="w-full h-auto object-cover" />
      </div>

      {/* METRICS */}
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
          <p className="text-white text-base mb-2">Views / Plays</p>
          <p className="text-[#CC111A] text-3xl font-semibold">1M+</p>
        </div>
      </div>
    </section>
  );
}
