"use client";

import React, { useState } from "react";
import Image from "next/image";

const MaggiContent = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      type: "youtube",
      src: "https://www.youtube.com/embed/g2FBaW_VoKs?autoplay=1",
      thumbnail: "/maggi/thumbnail.png",
      title: "Maggi Video 1"
    },
    {
      id: 2,
      type: "drive",
      src: "https://drive.google.com/file/d/10Atog8bRMNxdRxHd2oyOqn5mV3IUqpTI/preview",
      thumbnail: "/maggi/thumbnail2.png",
      title: "Maggi Video 2"
    },
    {
      id: 3,
      type: "youtube",
      src: "https://www.youtube.com/embed/ktQwzxGO0m0?start=3&autoplay=1",
      thumbnail: "/maggi/thumbnail3.png",
      title: "Maggi Video 3"
    }
  ];

  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
          Maggi - Cooking is music with MAGGI
        </h1>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
           Recipe videos people can actually vibe to.
        </p>

        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
          Brand/Business objective
        </h1>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
           Reignite excitement around everyday cooking by transforming it into a fun, expressive, and culturally relevant experience, reinforcing Maggi as the ingredient that turns routine meals into moments of joy.
        </p>
      </div>

      {/* Videos Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-black"
          >
            {playingVideo !== video.id && (
              <div
                className="absolute inset-0 w-full h-full cursor-pointer"
                onClick={() => setPlayingVideo(video.id)}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />

                {/* Custom Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <svg
                      width="61"
                      height="72"
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
            {playingVideo === video.id && (
              <iframe
                src={video.src}
                title={video.title}
                className="w-full h-full"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaggiContent;