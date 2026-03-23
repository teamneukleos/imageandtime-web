"use client";

import React from "react";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
  containerW: string;
  containerH: string;
}

const brands: Brand[] = [
  { name: "Nestle",             logo: "/brands/nestle.png",               containerW: "w-16 md:w-30",  containerH: "h-12 md:h-22" },
  { name: "Seplat",             logo: "/brands/seplat.png",               containerW: "w-16 md:w-32",  containerH: "h-10 md:h-16" },
  { name: "Ribena",             logo: "/brands/ribena.png",               containerW: "w-14 md:w-30",  containerH: "h-10 md:h-18" },
  { name: "Unionbank",          logo: "/brands/union-bank.png",           containerW: "w-14 md:w-26",  containerH: "h-10 md:h-20" },
  { name: "NNPC",               logo: "/brands/nnpc-logo.png",            containerW: "w-16 md:w-32",  containerH: "h-12 md:h-26" },
  { name: "Nestle pure life",   logo: "/brands/nestle-pure-life-logo.png",containerW: "w-14 md:w-28",  containerH: "h-10 md:h-20" },
  { name: "Tecno",              logo: "/brands/tecno-new.png",            containerW: "w-18 md:w-38",  containerH: "h-10 md:h-20" },
  { name: "Xiaomi",             logo: "/brands/xiaomi.png",               containerW: "w-16 md:w-30",  containerH: "h-10 md:h-20" },
  { name: "Lucozade",           logo: "/brands/lucozade-logo.png",        containerW: "w-14 md:w-28",  containerH: "h-10 md:h-18" },
  { name: "Haier thermocool",   logo: "/brands/haier-thermcool-blue.png", containerW: "w-24 md:w-52",  containerH: "h-12 md:h-28" },
  { name: "Cocacola",           logo: "/brands/cocacola.png",             containerW: "w-20 md:w-44",  containerH: "h-12 md:h-26" },
  { name: "Lafarge",            logo: "/brands/lafarge.png",              containerW: "w-20 md:w-44",  containerH: "h-14 md:h-30" },
  { name: "Cusson baby",        logo: "/brands/cusson-baby.png",          containerW: "w-14 md:w-28",  containerH: "h-10 md:h-18" },
  { name: "Maggi",              logo: "/brands/maggi-logo.jpg",          containerW: "w-16 md:w-32",  containerH: "h-12 md:h-22" },  
  { name: "Lacasera",           logo: "/brands/lacasera.png",             containerW: "w-18 md:w-38",  containerH: "h-10 md:h-20" },
  { name: "Nirvana",            logo: "/brands/nirvana.png",              containerW: "w-16 md:w-32",  containerH: "h-8  md:h-16" },
  { name: "M36",                logo: "/brands/Union-Bank-M36.png",       containerW: "w-14 md:w-28",  containerH: "h-10 md:h-20" },
  { name: "Pernod Ricard",      logo: "/brands/pernod-richard.png",       containerW: "w-20 md:w-44",  containerH: "h-10 md:h-20" },
  { name: "Infinix",            logo: "/brands/infinix.png",              containerW: "w-16 md:w-32",  containerH: "h-8  md:h-18" },
  { name: "PZ Cusson",          logo: "/brands/pz-cusson.png",            containerW: "w-16 md:w-32",  containerH: "h-8  md:h-18" },
  { name: "Greensprings School",logo: "/brands/greensprings.png",         containerW: "w-18 md:w-36",  containerH: "h-12 md:h-24" },
  { name: "ARM Pensions",       logo: "/brands/arm-pensions.png",         containerW: "w-14 md:w-28",  containerH: "h-6  md:h-12" },
  { name: "FBN Quest",          logo: "/brands/fbn-quest.png",            containerW: "w-16 md:w-32",  containerH: "h-8  md:h-14" },
  { name: "Jameson",            logo: "/brands/jameson.png",              containerW: "w-16 md:w-32",  containerH: "h-8  md:h-14" },
  { name: "Heineken",           logo: "/brands/heineken.png",             containerW: "w-14 md:w-28",  containerH: "h-10 md:h-18" },
  { name: "LVMH",               logo: "/brands/lvmh.png",                 containerW: "w-14 md:w-30",  containerH: "h-10 md:h-24" },
  { name: "Absolut",            logo: "/brands/absolut.png",              containerW: "w-16 md:w-32",  containerH: "h-8  md:h-16" },
  { name: "Martell",            logo: "/brands/martell-2.png",              containerW: "w-16 md:w-32",  containerH: "h-8  md:h-20" },
  { name: "Gulder",             logo: "/brands/gulder.png",               containerW: "w-14 md:w-28",  containerH: "h-10 md:h-18" },
  { name: "Olmeca",             logo: "/brands/olmeca-2.png",               containerW: "w-16 md:w-36",  containerH: "h-8  md:h-22" },
];

const Brands = () => {
  return (
    <section className="w-full bg-white py-16 md:py-28">
      {/* Title */}
      <div className="text-center mb-12 md:mb-16 px-6">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-normal text-black leading-snug">
          Great brands we&apos;ve worked with through the years
        </h2>
      </div>

      {/* Logo grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-y-10 md:gap-y-14 gap-x-4 md:gap-x-10 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center ${brand.containerW} ${brand.containerH}`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;