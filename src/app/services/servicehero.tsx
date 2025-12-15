"use client";

import Image from "next/image";

export default function ServiceHero() {
  return (
    <div className="w-full flex justify-center px-4 md:px-8 py-20 bg-[#111111]">
      <div
        className="bg-[#1E1E1E] rounded-3xl w-full mt-16 max-w-7xl p-8 md:p-16
        flex flex-col md:flex-row items-start md:items-center gap-12"
      >
        {/* LEFT SIDE */}
        <div className="flex-1 mb-8 md:mb-44">
          <h2 className="text-white text-3xl md:text-3xl font-semibold">
            Our Services
          </h2>

          <p className="text-gray-300 mt-6 text-sm leading-relaxed max-w-lg">
            We help ambitious brands craft remarkable identities, create
            effective advertising and conceive memorable experiences that
            connect people to their products and services.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 w-full">
          <div className="relative w-full min-h-[250px] h-[350px] md:h-[350px] overflow-hidden rounded-2xl">
            <Image
              src="/services/passion.png"
              alt="Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
