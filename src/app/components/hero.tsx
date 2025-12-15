"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/hero-bg.png",
    titleLeft: "Design",
    titleRight: "Culture",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Tristique nisl dolor dui lectus ornare dictum mattis pharetra ac. Non ornare sem varius orci.",
  },
  {
    image: "/images/hero-bg-2.png",
    titleLeft: "Innovation",
    titleRight: "Transformation",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Tristique nisl dolor dui lectus ornare dictum mattis pharetra ac. Non ornare sem varius orci.",
  },
  {
    image: "/images/hero-bg-3.png",
    titleLeft: "Strategy",
    titleRight: "Insight",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Tristique nisl dolor dui lectus ornare dictum mattis pharetra ac. Non ornare sem varius orci.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section
      className="
        relative w-full h-[150vh]
        flex flex-col items-center justify-center
        text-white text-center px-6 overflow-hidden
      "
    >
      {/* BACKGROUND SLIDING */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide.image}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 1 }} 
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt="Hero Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* CONTENT SLIDE LEFT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-[30vh]"
        >
          <h1 className="text-2xl md:text-4xl font-semibold flex items-center justify-center gap-3">
            <span>{slide.titleLeft}</span>
            <Image
              src="/logo/and-logo.svg"
              alt="Ampersand Logo"
              width={50}
              height={50}
              className="w-8 md:w-12"
            />
            <span>{slide.titleRight}</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-sm md:text-xl leading-relaxed">
            {slide.subtitle}
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;