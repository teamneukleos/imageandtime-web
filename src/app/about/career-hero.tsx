"use client";

import Image from "next/image";

const CareerHero = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center text-white px-6 overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/about/career-bg.png"   
        alt="Careers background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-3xl text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-light">
          Careers at Image & Time
        </h2>

        
      </div>
    </section>
  );
};

export default CareerHero;
