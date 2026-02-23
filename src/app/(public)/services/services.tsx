"use client";

import React from "react";

export default function Services() {
  return (
    <section className="w-full bg-[#111111] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* LEFT — ABOUT LABEL */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              How we work 
            </p>
            <div className="w-full h-px bg-gray-700" />
          </div>

          {/* MIDDLE — HEADING */}
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-light text-white leading-tight">
              Tailored solutions <br />
              for bussiness <br />
              excellence
            </h2>
          </div>

          {/* RIGHT — ARTICLE */}
          <div className="md:col-span-5 md:col-start-8 space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              Our process is built on a simple, powerful DNA: 
              L-E-D — Learning, End-user obsession, and Design. 
              This triad fuels our every action and decision.

            </p>

            <h2 className="text-2xl md:text-2xl lg:text-3xl font-light text-white leading-tight">Learning</h2>

            <p>
              Here, Learning is not a department, it is 
              our default mode. In a world of constant 
              change, we cultivate a culture of relentless 
              curiosity and intellectual agility, where every 
              project, challenge, and user insight is a catalyst 
              for growth. We operationalise this by listening deeply, 
              synthesising continuously and adapting fearlessly, to keep our clients ahead of the curve.
            </p>


            <h2 className="text-2xl md:text-2xl lg:text-3xl font-light text-white leading-tight">End-user obsession</h2>

            <p>
             Our work begins and ends with a single focus: 
             the human being at the other end of the experience. 
             This is the uncompromising lens through which we evaluate 
             every idea, message, and design. It moves us beyond 
             assumptions into the realm of genuine empathy and insight, 
             ensuring our solutions are not just creatively brilliant but 
             deeply resonant and effective.

            </p>

            <h2 className="text-2xl md:text-2xl lg:text-3xl font-light text-white leading-tight">Design</h2>

            <p>
             For us, Design is our way of thinking, communicating, and doing. 
             It is the discipline that transforms outstanding ideas into tangible reality, 
             forges deeper connections between our clients and their audiences, and acts 
             as the fundamental catalyst for commercial success.
             Together, these three strands form the irreducible core of how we work. 
             They are interwoven and interdependent, each strengthening the others 
             to create transformative team, as well as experiences and drive growth 
             from the inside out.

            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
