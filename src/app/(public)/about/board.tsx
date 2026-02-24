"use client";

import Image from "next/image";
import { useState } from "react";

const Board = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const boardMembers = [
    {
      name: "Gbonju Akingbade",
      role: "Member",
      image: "/team/gbonju-2.png",
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
    <section className="w-full bg-[#111111] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h2 className="text-3xl font-semibold text-white mb-20">
          Our Board
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {boardMembers.map((member, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() =>
                  setActiveIndex(isActive ? null : index)
                }
              >
                {/* IMAGE */}
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`
                      object-cover transition-all duration-500
                      grayscale brightness-75
                      md:group-hover:grayscale-0 md:group-hover:brightness-100
                      ${isActive ? "grayscale-0 brightness-100" : ""}
                    `}
                  />

                  {/* DARK OVERLAY */}
                  <div
                    className={`
                      absolute inset-0 transition-all duration-500
                      bg-black/30
                      md:group-hover:bg-black/0
                      ${isActive ? "bg-black/0" : ""}
                    `}
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Board;
