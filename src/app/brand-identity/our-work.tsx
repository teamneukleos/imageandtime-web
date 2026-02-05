"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const works = [
  {
    brand: "Awarri",
    title: "Africa’s Robotics & AI Brand",
    headline: "The future looks African",
    emotive: "This feels important",
    image: "/awarri/awarri-bg.png",
    link: "/projects/awarri"
  },
  {
    brand: "Union bank",
    title: " M36 Investment App",
    headline: "Banking, but for my generation",
    emotive: "This was made for me",
    image: "/m36/m36-bg.png",
    link: "/projects/union"
  },
  {
    brand: "Ribena",
    title: "Packaging rebrand",
    headline: "Pick me",
    emotive: "This looks fun",
    image: "/work/ribena.png",
    link: "/projects/ribena"
  },
  {
    brand: "eTranzact",
    title: "",
    headline: " Serious tech, finally explained",
    emotive: "i get it now",
    image: "/eTranzact/eTranzact-bg.png",
    link: "/projects/eTranzact"
  },
  {
    brand: "Kucheza gaming",
    title: "",
    headline: "where gaming meets culture",
    emotive: "i belong here",
    image: "/kucheza/kucheza-outside.jpg",
    link: "/projects/kucheza"
  },
  {
    brand: "One Alpha",
    title: "Premium Road Transport Brand",
    headline: "Arrive in Style",
    emotive: "I feel confident choosing this",
    image: "/one-alpha/one-alpha-bg.png",
    link: "/projects/one-alpha"
  },
  {
    brand: "Bukka Hut",
    title: "Nigeria’s Comfort Food Brand",
    headline: "A Taste of Home",
    emotive: "This feels warm and familiar",
    image: "/bukka-hut/bukka-hut-bg.png",
    link: "/projects/bukka-hut"
  },
  {
    brand: "Mr Biggs",
    title: "Nigeria’s Iconic Fast Food Brand",
    headline: "Where memories meet meals",
    emotive: "This feels nostalgic and satisfying",
    image: "/mr-biggs/office-1.jpg",
    link: "/projects/mr-biggs"
  },
];

const OurWork = () => {
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  return (
    <section id="our-work" className="w-full bg-[#111111] py-24 px-4 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Our work
        </h2>
        <p className="text-lg md:text-2xl text-gray-400 italic">
          Because people don't remember ads. They remember how they felt.
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {works.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setMobileActive(i)}
              className="
                relative group rounded-xl overflow-hidden
                w-full aspect-square
                md:h-[320px] md:aspect-auto
              "
            >
              <Image 
                src={item.image} 
                alt={`${item.brand} - ${item.title}`} 
                fill 
                className="object-cover" 
              />

              <div
                className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${mobileActive === i ? "opacity-100" : ""}
                `}
              >
                <h3 className="text-lg md:text-xl font-bold text-white text-center mb-2">
                  {item.brand}
                </h3>
                <p className="text-sm md:text-base text-gray-300 text-center italic mb-3">
                  "{item.headline}"
                </p>
                <p className="text-xs md:text-sm text-orange-400 text-center font-medium">
                  {item.emotive}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;