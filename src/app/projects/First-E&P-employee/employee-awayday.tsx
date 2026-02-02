"use client";

import React, { useState } from "react";
import Image from "next/image";

const EmployeeContent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            First E&P – All employees Awayday 
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Let's reset
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Build a high-spirited, engaged employee community by reinforcing shared goals, trust, and accountability through large-scale experiential engagement.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/employee-awayday/image.png"
            alt="Employee Awayday Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EmployeeContent;