"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const works = [
  {
    brand: "First E&P",
    title: "Leadership Retreat",
    headline: "Let's reset",
    emotive: "We finally aligned",
    image: "/First-E&P/First-E&P-bg.png",
    link: "/projects/first-e&p"
  },
  {
    brand: "First E&P",
    title: "All Employees Awayday",
    headline: "One team, one future",
    emotive: "I feel like i belong",
    image: "/employee-awayday/employee.png",
    link: "/projects/First-E&P-employee"
  },
  {
    brand: "Seplat",
    title: "New Energy Team Away Day",
    headline: "Trust the process",
    emotive: "We can do this together",
    image: "/seplat/seplat.png",
    link: "/projects/seplat"
  },
  {
    brand: "Seplat",
    title: "Subsurface & geosciences retreat",
    headline: "unlocking our superpowers",
    emotive: "i matter here",
    image: "/subsurface/seplat.png",
    link: "/projects/seplat-subsurface"
  },
  {
    brand: "Seplat",
    title: "Engineering & project retreat",
    headline: "Back to our roots",
    emotive: "This feels human",
    image: "/project-retreat/project-retreat-bg.png",
    link: "/projects/project-retreat"
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
          We design experiences that reconnect teams to purpose, each other, and the work.
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