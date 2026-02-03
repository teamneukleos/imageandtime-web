"use client";

import React, { useState } from "react";
import Image from "next/image";

const SuicideContent = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      type: "youtube",
      src: "https://www.youtube.com/embed/iDjEP68Inuk?start=3&autoplay=1",
      thumbnail: "/suicide/thumbnail.png",
      title: "Anti-Suicide YouTube Video",
    },
    {
      id: 2,
      type: "drive",
      src: "https://drive.google.com/file/d/1MvlCK-Q7l7F2m4Vy505wn-6rm9J5JjXm/preview",
      thumbnail: "/suicide/thumbnail1.png",
      title: "Anti-Suicide Drive Video",
    },
  ];

  return (
    <section className="w-full bg-[#0D0D0D] py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* TEXT CONTENT */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Anti-Suicide and Depression Squad – I Tried Suicide So You Don't Have To
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Reviews, but like for suicide? How?
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 mt-12">
            Brand/Business Objective
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Break stigma around suicide and mental health by humanising survivor stories,
            positioning The Suicide Review as a trusted, relatable resource that encourages
            empathy, conversation, and prevention.
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

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <svg
                        viewBox="0 0 81 92"
                        width="61"
                        height="72"
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
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

export default SuicideContent;
