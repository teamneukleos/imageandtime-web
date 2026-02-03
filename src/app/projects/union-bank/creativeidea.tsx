"use client";

import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* SECTION TEXT */}
        <div className="max-w-4xl space-y-10 mb-20 mt-[-50px]">
          

          {/* THE PROBLEM */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
              The Problem
            </h3>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Union Bank, the second oldest bank in Nigeria and once the biggest,
              had become a reference point for the incompetence that plagued the
              country. Although a comprehensive transformation effort helped the
              century-old institution fight its way back from the brink of
              extinction, public perception lagged behind.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Two years after what was believed to be a successful rebrand, the
              bank was still seen as old and outdated. We needed to prove people
              wrong.
            </p>
          </div>

          {/* INSIGHT */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
              Insight
            </h3>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Nigerians have been let down by their leaders. With over a third of
              the population living under the poverty line, trust in
              institutions, politicians, and even one another is low.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Yet Nigerians remain deeply religious. The faith they lack in
              leadership, they place in God. In this contradiction, we found our
              insight — Nigerians are hopeful pessimists. Despite daily
              struggles, they remain hopeful people who refuse to let their
              disappointments turn them into obvious cynics.
            </p>
          </div>

          {/* BIG IDEA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
              Big Idea
            </h3>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">
                Enabling Success (Don’t Be an Uncle Thomas).
              </span>{" "}
              With the worst recession in decades lingering and presidential
              elections looming, pessimism was at an all-time high. We needed to
              restore hope by calling out the “cynic” in all of us.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Borrowing from the biblical doubting disciple, we created “Uncle
              Thomas” — the ultimate pessimist. The campaign opens with a stark
              portrayal of Nigerian reality and ends with rousing, prayer-like
              invocations that promise a better future, with Union Bank by your
              side.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              In line with Union Bank’s positioning as democratisers — the bank
              for the 99% — the film was shot entirely in Nigeria with an
              all-Nigerian cast and crew. We launched on Nigeria’s Independence
              Day across digital platforms, television, and cinemas.
              The film instantly struck an emotional chord with Nigerians. Social media was abuzz.

            </p>
          </div>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-28">
          <img
            src="/union/img1.png"
            alt="Union Bank campaign still"
            className="w-full h-auto object-cover"
          />
          <img
            src="/union/img2.png"
            alt="Union Bank campaign still"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-12">
          <div>
            <p className="text-white text-base mb-2">Impressions</p>
            <p className="text-[#CC111A] text-3xl font-semibold">181M+</p>
          </div>

          <div>
            <p className="text-white text-base mb-2">Increase in new accounts</p>
            <p className="text-[#CC111A] text-3xl font-semibold">20%</p>
          </div>

          <div>
            <p className="text-white text-base mb-2">Views / Plays</p>
            <p className="text-[#CC111A] text-3xl font-semibold">8M+</p>
          </div>
        </div>

      </div>
    </section>
  );
}
