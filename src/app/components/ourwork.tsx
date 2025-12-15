"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const works = [
  {
    title: "Golden Morn",
    image: "/work/golden-more.png",
    link: "/projects/golden-morn",
  },
  {
    title: "Haier thermocool",
    image: "/work/hpz.jpg",
    link: "/projects/haier-thermocool",
  },
  {
    title: "Lucozade",
    image: "/work/lucozade.png",
    link: "/projects/lucozade",
  },
  {
    title: "Maggi",
    image: "/work/maggi.png",
    link: "/projects/maggi",
  },
  {
    title: "Ribena",
    image: "/work/ribena.png",
    link: "/work/molecule",
  },
  {
    title: "Greensprings",
    image: "/work/greensprings.jpg",
    link: "/projects/greensprings",
  },
];

const OurWork = () => {
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  return (
    <section className="w-full h-full bg-[#111111] py-4 md:py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-14 ">

        {/* LEFT TEXT */}
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Our Work</h2>
          <p className="mt-4 text-gray-300 text-sm md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sed sagittis cursus eleifend
            ut sit et.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-2/3">
          {works.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setMobileActive(i)}
              className="relative group rounded-2xl overflow-hidden aspect-square w-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />

              {/* OVERLAY */}
              <div
                className={`
                  absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${mobileActive === i ? "opacity-100" : ""}
                `}
              >
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="text-sm text-gray-300 mt-1">Click to read more</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurWork;