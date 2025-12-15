"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const works = [
  { 
    title: "Golden Morn", 
    image: "/work/golden-more.webp", 
    link: "/projects/golden-morn" 
},
  { 
    title: "Haier thermocool", 
    image: "/work/hpz.jpg", 
    link: "/projects/haier-thermocool" 
},
  { 
    title: "Lucozade", 
    image: "/work/lucozade.png", 
    link: "/projects/lucozade" 
},
  { 
    title: "Maggi", 
    image: "/work/maggi.png", 
    link: "/projects/maggi" 
},
  { 
    title: "Ribena", 
    image: "/work/ribena.png", 
    link: "/work/molecule" 
},
  { 
    title: "Greensprings", 
    image: "/work/greensprings.jpg", 
    link: "/projects/greensprings" 
},
];

const ProjectGrid = () => {
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#111111] py-24 px-4 md:px-12 lg:px-20">
    
      <div className="w-full">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">

          {works.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setMobileActive(i)}
              className="
                relative group rounded-xl overflow-hidden
                w-full h-[280px]
                sm:h-[300px]
                md:h-[320px]
              "
            >
              <Image src={item.image} alt={item.title} fill className="object-cover" />

              <div
                className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${mobileActive === i ? "opacity-100" : ""}
                `}
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="text-sm text-gray-300 mt-1">Click to read more</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGrid;
