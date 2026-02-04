"use client";

import React, { useState } from "react";
import Image from "next/image";

const LacaseraContent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#111111] py-32 px-6 md:px-12">
      {/* SHARED CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER / TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            La Casera - This is not a full stop
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
             A story of hope you won’t yinmu at
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Position Lacasera as a symbol of everyday optimism and resilience, reinforcing the brand as a refreshing companion for moments of reflection, recovery, and forward movement in the Nigerian journey.
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          {!isPlaying && (
            <div
              className="absolute inset-0 w-full h-full cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src="/lacasera/thumbnail.png" 
                alt="Lacasera Thumbnail"
                fill
                className="object-cover"
              />

              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <svg
                    width="81"
                    height="92"
                    viewBox="0 0 81 92"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M78 41.3808C81.3333 43.3053 81.3333 48.1166 78 50.0411L7.50001 90.7443C4.16667 92.6688 0 90.2631 0 86.4141V5.00775C0 1.15875 4.16667 -1.24689 7.5 0.677615L78 41.3808Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Video iframe */}
          {isPlaying && (
            <iframe
              src="https://www.youtube.com/embed/zHh43Oj3LRA?autoplay=1"
              title="Lacasera Campaign Video"
              className="w-full h-full"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

      </div>
    </section>
  );
};

export default LacaseraContent;
