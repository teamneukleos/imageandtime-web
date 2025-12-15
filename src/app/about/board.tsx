"use client";

import { useState } from "react";
import Image from "next/image";

const Board = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const BoardMembers = [
    {
      name: "Gbonju Akingbade",
      role: "Member",
      image: "/team/gbonju.png",
    },
    {
      name: "Tosin Lanipekun",
      role: "Member",
      image: "/team/tosin.png",
    },
    {
      name: "Jadesola James-Omitiran",
      role: "Member",
      image: "/team/jade.png",
    },
  ];

  return (
    <section className="w-full bg-[#111111] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-16">
          Our Board
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {BoardMembers.map((member, index) => (
            <div
              key={index}
              className="relative group cursor-pointer z-20"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {/* NAME AND ROLE */}
              <div className="text-white">
                <h3 className="text-xl md:text-xl font-medium mb-2 group-hover:text-gray-300 transition">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE OVERLAY */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none animate-fadeIn">
          <div className="relative w-[60vw] md:w-[300px] h-[70vh] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src={BoardMembers[activeIndex].image}
              alt={BoardMembers[activeIndex].name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Board;