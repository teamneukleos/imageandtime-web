"use client";

import React from "react";

export default function OurTeam() {
  return (
    <section className="w-full bg-[#111111] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* LEFT — ABOUT LABEL */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              OUR TEAM
            </p>
            <div className="w-full h-px bg-gray-700" />
          </div>

          {/* MIDDLE — HEADING */}
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-light text-white leading-tight">
              Our team:
              <br />
             Catalysts of <br />
             Success
            </h2>
          </div>

          {/* RIGHT — ARTICLE */}
          <div className="md:col-span-5 md:col-start-8 space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
