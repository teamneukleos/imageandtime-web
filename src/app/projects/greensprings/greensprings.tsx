"use client";

import React, { useState } from "react";
import Image from "next/image";

const GreenspringsContent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
         Greensprings - Evergreen 40th Anniversary Celebration

        </h1>

        <p className="text-gray-300 text-lg md:text-lg leading-relaxed">
          Evergreen is the 40th anniversary celebration of the school, 
          with the aim of honoring its enduring legacy and inspiring future generations.
        </p>
      </div>

      {/* Video Section */}
      <div className="max-w-5xl mx-auto relative aspect-video rounded-lg overflow-hidden shadow-lg">

        
        {!isPlaying && (
          <div
            className="absolute inset-0 w-full h-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src="/greensprings/thumbnail.png"
              alt="Greensprings Thumbnail"
              fill
              className="object-cover"
            />

            {/* Custom Play button */}
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
            src="https://www.youtube.com/embed/rM-hfCUFcNA?si=7PgFMs0XmHR906pp"
            title="Greensprings Video"
            className="w-full h-full"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default GreenspringsContent;
