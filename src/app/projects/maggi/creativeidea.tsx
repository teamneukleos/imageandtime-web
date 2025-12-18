import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-28 px-6 md:px-12">
      {/* SECTION TEXT */}
      <div className="max-w-4xl mx-auto space-y-6 mb-20 mt-[-50px]">
        <h2 className="text-xl font-semibold text-white">Creative Idea</h2>
        <p className="text-gray-300 leading-relaxed">
          Traditional recipe videos have lost their spark, struggling to capture
          audience attention. To reinvent the experience, we developed Cooking
          is Music with Maggi, a campaign that merged Nigeria’s most popular
          music genres—Amapiano, Afrobeats, Highlife, and Afropop—with
          step-by-step cooking guides. Serving as a metaphor for how Maggi
          spices up the bland, the concept transformed everyday cooking into an
          engaging, sensory experience. By collaborating with producer Paul
          Cleverlee and Chef Debbie, we created full-length innovative musical
          recipes crafted entirely from cooking sounds.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The campaign launched across YouTube and social media, quickly
          sparking hundreds of user-generated cooking videos and driving higher
          engagement. Beyond entertainment, the initiative established a new
          creative identity for Maggi, positioning the brand at the intersection
          of food and music culture. With plans to expand this sonic library,
          the goal is to solidify Maggi’s presence in the digital era of reels
          and TikTok, ensuring the brand remains fresh, relevant, and deeply
          connected to its audience.
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
          src="/maggi/img1.png"
          alt="Creative Idea Image"
          className="w-full h-auto object-cover"
        />
        <img
          src="/maggi/img2.png"
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