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
  const currentSlide = String(index + 1).padStart(2, '0');
  const totalSlides = String(slides.length).padStart(2, '0');

  return (
    <section
      className="
        relative w-full min-h-screen md:min-h-[100vh]
        flex flex-col items-start justify-center
        text-white overflow-hidden
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
      <div className="w-full mt-32 px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-base md:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed text-left">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ANIMATED VERTICAL LINE - CENTER BOTTOM */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 h-16 w-[2px] overflow-hidden">
        <motion.div
          className="w-full h-8 bg-white"
          animate={{
            y: ["-100%", "200%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.5
          }}
        />
      </div>

      {/* SLIDE COUNTER */}
      <div className="absolute bottom-8 left-6 md:left-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-start"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {currentSlide}
            </span>
            <span className="text-xs md:text-sm font-bold text-white/50 mt-1">
              /{totalSlides}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;