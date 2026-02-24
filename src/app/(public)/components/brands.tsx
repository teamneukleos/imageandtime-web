"use client";

import React from "react";
import Image from "next/image";

const brands = [
  { name: "Nestle", logo: "/brands/nestle-2.png" },
  { name: "Seplat", logo: "/brands/seplat.png" },
  { name: "Ribena", logo: "/brands/ribena.png" },
  { name: "Goldenmorn", logo: "/brands/goldenmorn.png" },
  { name: "Maggi", logo: "/brands/maggi.png" },
  { name: "Milo", logo: "/brands/milo.png" },
  { name: "Nescafe", logo: "/brands/nescafe.png" },
  { name: "Unionbank", logo: "/brands/union.png" },

  // ➕ added brands
  { name: "Pepsi", logo: "/brands/pepsi.png" },
  { name: "Coca-Cola", logo: "/brands/cocacola.png" },
  { name: "MTN", logo: "/brands/mtn.png" },
  { name: "Airtel", logo: "/brands/airtel.png" },
  { name: "Google", logo: "/brands/google.png" },
  { name: "Meta", logo: "/brands/meta.png" },
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
                className="object-contain"
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
                className="object-contain"
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
          animation: scroll 22s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
