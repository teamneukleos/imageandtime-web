"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/hero-bg.jpg",
    subtitle: "We design brands, not just campaigns.",
  },
  {
    image: "/images/herobg-2.png",
    subtitle: "We don't only make ads that don't feel like ads.",
  },
  {
    image: "/images/herobg3.png",
    subtitle: "We build brands people recognise, trust, and want to belong to.",
  },
  {
    image: "/images/herobg-4.jpg",
    subtitle: "And we design experiences that make organisations feel human again.",
  },
  {
    image: "/images/hero-bg-5.jpg",
    subtitle: "Because humans are not creatures of logic. They are creatures of emotion.",
  },
  {
    image: "/images/hero-bg-6.png",
    subtitle: "Whether we're building a brand, a product, or a workplace culture, we always start with one question: What do you want people to feel?",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section
      className="
        relative w-full min-h-screen md:min-h-[100vh]
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

      {/* CONTENT SLIDE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-[10vh] md:mt-[30vh]"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto leading-tight">
            {slide.subtitle}
          </h1>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;