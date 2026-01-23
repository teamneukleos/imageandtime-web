"use client";

import React from "react";
import Image from "next/image";

const brands = [
  { name: "Nestle", logo: "/brands/nestle.png" },
  { name: "Seplat", logo: "/brands/seplat.png" },
  { name: "Ribena", logo: "/brands/ribena.png" },
  { name: "Goldenmorn", logo: "/brands/goldenmorn.png" },
  { name: "Maggi", logo: "/brands/maggi.png" },
  { name: "Milo", logo: "/brands/milo.png" },
  { name: "Nescafe", logo: "/brands/nescafe.png" },
  { name: "Unionbank", logo: "/brands/union.png" },
];

const Brands = () => {
  return (
    <section className="w-full bg-[#111111] py-16 md:py-24 overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          Great brands we've worked with through the years
        </h2>
      </div>

      {/* Scrolling Logo Container */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex-shrink-0 w-48 md:w-56 lg:w-64 mx-8 flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={80}
                className="object-contain transition-all duration-300"
              />
            </div>
          ))}

          {/* Duplicate set */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex-shrink-0 w-48 md:w-56 lg:w-64 mx-8 flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={80}
                className="object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
