"use client";

import React, { useEffect, useState } from "react";

function CountUp({
  end,
  suffix = "",
  duration = 1200,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stat() {
  return (
    <section className="w-full bg-[#111111] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* LEFT — LABEL */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              STATS
            </p>
            <div className="w-full h-px bg-gray-700" />
          </div>

          {/* RIGHT — CARDS */}
          <div className="md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-[#F5F5F5] p-10">
              <p className="text-xs tracking-widest text-gray-500 mb-6">
                CLIENTS
              </p>
              <div className="w-full h-px bg-gray-200 mb-8" />

              <h3 className="text-5xl font-light text-[#111111] mb-6">
                <CountUp end={80} suffix="+" />
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We’ve had the privilege of partnering with over eighty
                organizations that trust our insights and guidance.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#F5F5F5] p-10">
              <p className="text-xs tracking-widest text-gray-500 mb-6">
                PROJECTS
              </p>
              <div className="w-full h-px bg-gray-200 mb-8" />

              <h3 className="text-5xl font-light text-[#111111] mb-6">
                <CountUp end={1000} suffix="+" />
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We’ve delivered over one thousand successful initiatives,
                driving measurable impact across engagements.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#F5F5F5] p-10">
              <p className="text-xs tracking-widest text-gray-500 mb-6">
                CLIENT SATISFACTION
              </p>
              <div className="w-full h-px bg-gray-200 mb-8" />

              <h3 className="text-5xl font-light text-[#111111] mb-6">
                <CountUp end={95} suffix="%" />
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                By focusing on real results and consistent communication,
                we’ve achieved a 95% satisfaction rate among our clients.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
