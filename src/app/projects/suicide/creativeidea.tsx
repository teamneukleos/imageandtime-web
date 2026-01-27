import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-28 px-6 md:px-12">
      {/* SECTION TEXT - ALIGNED WITH SUICIDE CONTENT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Creative Idea</h2>
          <p className="text-gray-300 leading-relaxed">
            Despite having one of the highest suicide rates in Africa at 6.9
            per 100,000 people in 2019, a common misconception persists: 
            "suicide isn't a Nigerian thing," and those who take their own 
            lives are viewed as weak. As a result, many turn to the internet
            for answers. Noticing the internet's vast review culture, we decided 
            to apply this concept to suicide prevention. Statistics reveal that nine 
            out of ten people who attempt suicide and survive never try again, making 
            their stories a powerful prevention tool. Led by influencer Real Warri Pikin, 
            a suicide survivor herself, we launched "The Suicide Review - I Tried Suicide 
            So You Don't Have To." This platform collects stories from Nigerian survivors, 
            serving as a vital resource for prevention.
          </p>
        </div>
      </div>

      {/* VIDEO */}
      <div className="max-w-4xl mx-auto mb-28 flex justify-center">
        <video
          src="/suicide/suicide-video.mp4"
          controls
          playsInline
          className="w-full md:w-auto max-w-full h-auto rounded-lg object-cover"
        />
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
