"use client";

import Image from "next/image";
import { useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Completed projects" },
  { value: 97, suffix: "+", label: "Awards collected" },
];

const Counter = ({ value, suffix }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const [displayed, setDisplayed] = useState<number>(0);

  useEffect(() => {
    let controls: { stop?: () => void } | undefined;
    const unsubscribe = motionVal.on("change", (v) => {
      if (typeof v === "number") setDisplayed(Math.floor(v));
    });

    if (isInView) {
      controls = animate(motionVal, value, { duration: 2 });
    }

    return () => {
      unsubscribe();
      if (controls && typeof controls.stop === "function") controls.stop();
    };
  }, [isInView, motionVal, value]);

  return (
    <span ref={ref}>
      {displayed}
      {suffix || ""}
    </span>
  );
};

export default function ProjectHero() {
  return (
    <div className="w-full flex justify-center px-4 md:px-8 py-20 bg-[#111111]">
      <div className="bg-[#1E1E1E] rounded-3xl w-full mt-16 max-w-7xl p-8 md:p-16 
    flex flex-col md:flex-row items-start md:items-center gap-12">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="text-white text-3xl md:text-3xl font-semibold">
            Our Work
          </h2>

          <p className="text-gray-300 mt-6 text-sm leading-relaxed max-w-lg">
            Together we turn the blank canvas into a masterpiece, your brand into a sensation and your website into an experience
          </p>

          

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-8">
            {stats.map((item, i) => (
              <div key={i} className="flex flex-col">

                <div className="text-white text-3xl md:text-4xl font-semibold">
                  <Counter value={item.value} suffix={item.suffix} />
                </div>

                <div className="w-6 h-[3px] bg-[#FF3D3D] mt-3 rounded"></div>

                <p className="text-gray-400 text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        
        {/* RIGHT SIDE IMAGE */}
<div className="flex-1 w-full">
  <div className="relative w-full min-h-[250px] h-[350px] md:h-[350px] overflow-hidden rounded-2xl">
    <Image
      src="/work/project-hero.png"
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
