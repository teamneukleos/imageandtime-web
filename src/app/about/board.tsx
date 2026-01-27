"use client";

import Image from "next/image";

const Board = () => {
  const boardMembers = [
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
    <section className="w-full bg-[#111111] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h2 className="text-3xl font-semibold text-white mb-20">
          Our Board
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {boardMembers.map((member, index) => (
            <div key={index} className="group">
              {/* IMAGE */}
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="
                    object-cover
                    filter grayscale brightness-75
                    group-hover:grayscale-0 group-hover:brightness-100
                    transition-all duration-500
                  "
                />

                {/* subtle dark wash */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-500" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
