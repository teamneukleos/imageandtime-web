"use client";
import React from "react";
import Image from "next/image";

const awards = [
  { id: "mwa", src: "/awards/mwa.png" },
  { id: "Laif", src: "/awards/Laif.png" },
  { id: "pitchers-awards", src: "/awards/pitchers.png" },
  { id: "D&ad", src: "/awards/D&AD-shortlisted.png" },
  { id: "nma", src: "/awards/nma.png" },
];

const Awards = () => {
  return (
    <section className="w-full bg-[#111111] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-12 gap-y-16 items-center">
          {/* Row 1: awards 1–3, each spanning 2 columns */}
          {awards.slice(0, 3).map((award) => (
            <div key={award.id} className="relative w-full h-28 md:col-span-2">
              <Image
                src={award.src}
                alt={award.id}
                fill
                className="object-contain object-left"
              />
            </div>
          ))}

          {/* Row 2: awards 4–5, centered (col-start 2 and 4) */}
          <div
            key={awards[3].id}
            className="relative w-full h-28 md:col-span-2 md:col-start-2"
          >
            <Image
              src={awards[3].src}
              alt={awards[3].id}
              fill
              className="object-contain object-left"
            />
          </div>
          <div
            key={awards[4].id}
            className="relative w-full h-28 md:col-span-2 md:col-start-4"
          >
            <Image
              src={awards[4].src}
              alt={awards[4].id}
              fill
              className="object-contain object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;