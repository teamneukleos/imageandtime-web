"use client";

import React, { useState } from "react";
import Image from "next/image";

const NestleContent = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/Ui56E5gT-jE?autoplay=1",
      thumbnail: "/nestle/thumbnail1.png",
      title: "Nestlé Video 1",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/z9JW3scCpvY?autoplay=1",
      thumbnail: "/nestle/thumbnail2.png",
      title: "Nestlé Video 2",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/6pDZkSk8Bbk?autoplay=1",
      thumbnail: "/nestle/thumbnail3.png",
      title: "Nestlé Video 3",
    },
    {
      id: 4,
      src: "https://drive.google.com/file/d/1yIC0KDdq0apvIseaM3wxk_2y5fMgtHz1/preview",
      thumbnail: "/nestle/thumbnail5.png",
      title: "Nestlé Video 4",
    },
  ];

  return (
    <section className="w-full bg-[#111111] py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Nestlé Pure Life – Life of the Party
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Is it not just water?
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Disrupt category perceptions by repositioning water as an essential
            social catalyst, establishing Nestlé Pure Life as the brand that
            brings energy, fun, and life to every gathering.
          </p>
        </div>

        {/* VIDEOS – STACKED */}
        <div className="space-y-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-black"
            >
              {playingVideo !== video.id && (
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <svg
                        viewBox="0 0 81 92"
                        width="51"
                        height="62"
                        fill="white"
                      >
                        <path d="M78 41.3808C81.3333 43.3053 81.3333 48.1166 78 50.0411L7.5 90.7443C4.16667 92.6688 0 90.2631 0 86.4141V5.00775C0 1.15875 4.16667 -1.24689 7.5 0.677615L78 41.3808Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {playingVideo === video.id && (
                <iframe
                  src={video.src}
                  title={video.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NestleContent;
