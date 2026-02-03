"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const works = [
  {
    brand: "Union Bank",
    title: "Enabling Success",
    headline: "Documenting the Nigerian struggle",
    emotive: "Why do I feel seen?",
    image: "/work/enabling-success.png",
    link: "/projects/union-bank"
  },
  {
    brand: "Haier Thermocool",
    title: "Let Home Feel Like Home",
    headline: "Is it a movie or an ad?",
    emotive: "Are they living in my house?",
    image: "/work/hpz.jpg",
    link: "/projects/haier-thermocool"
  },
  {
    brand: "Maggi",
    title: "Cooking Is Music with Maggi",
    headline: "Recipe videos people can actually vibe to",
    emotive: "Cooking is fun",
    image: "/work/maggi-bg.png",
    link: "/projects/maggi"
  },
  {
    brand: "Nestlé Pure Life",
    title: "Life of the Party",
    headline: "Is it not just water?",
    emotive: "Water is the life of the party",
    image: "/work/nestle-purelife.png",
    link: "/projects/nestle"
  },
  {
    brand: "Greensprings School",
    title: "Greatness Is Evergreen",
    headline: "40 years in a minute!",
    emotive: "Those are some smart kids!",
    image: "/work/greensprings.jpg",
    link: "/projects/greensprings"
  },
  {
    brand: "Anti-Suicide and Depression Squad",
    title: "I Tried Suicide So You Don't Have To",
    headline: "Reviews, but like for suicide? How?",
    emotive: "Finally, someone gets me",
    image: "/work/asds.png",
    link: "/projects/suicide"
  },
  {
    brand: "Sickle Cell Foundation",
    title: "Love a Nigerian",
    headline: "The bond of a namesake",
    emotive: "It could have been me",
    image: "/work/sickle-cell.png",
    link: "/projects/sickle-cell"
  },

  {
    brand: "Lacasera",
    title: "This is not a full stop",
    headline: "This is not a full stop",
    emotive: "",
    image: "/work/lacasera.png",
    link: "/projects/lacasera"
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