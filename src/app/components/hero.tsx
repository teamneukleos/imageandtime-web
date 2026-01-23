"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-bg.jpg",
    subtitle: (
      <>
        We design brands,<br />not just campaigns.
      </>
    ),
  },
  {
    image: "/images/herobg-2.png",
    subtitle: (
      <>
        We don't only make ads<br />that don't feel like ads.
      </>
    ),
  },
  {
    image: "/images/herobg3.png",
    subtitle: (
      <>
        We build brands people recognise,<br />trust, and want to belong to.
      </>
    ),
  },
  {
    image: "/images/herobg-4.jpg",
    subtitle: (
      <>
        And we design experiences that<br />make organisations feel human again.
      </>
    ),
  },
  {
    image: "/images/hero-bg-5.jpg",
    subtitle: (
      <>
        Because humans are not creatures of logic.<br />They are creatures of emotion.
      </>
    ),
  },
  {
    image: "/images/hero-bg-6.png",
    subtitle: (
      <>
        Whether we're building a brand, a product,<br />
        or a workplace culture, we always start<br />
        with one question: What do you want<br />
        people to feel?
      </>
    ),
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [hoveredNav, setHoveredNav] = useState<"prev" | "next" | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[index];
  const currentSlide = String(index + 1).padStart(2, "0");
  const totalSlides = String(slides.length).padStart(2, "0");

  return (
    <section className="relative w-full min-h-screen flex items-start justify-center text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide.image}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
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

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* CONTENT */}
      <div className="w-full mt-80 px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* PREV / NEXT — HORIZONTAL */}
      <div className="absolute bottom-56 right-6 md:right-12 flex items-center gap-6">
        {/* PREV */}
        <button
          onClick={handlePrev}
          onMouseEnter={() => setHoveredNav("prev")}
          onMouseLeave={() => setHoveredNav(null)}
          className="relative h-8 w-12 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {hoveredNav === "prev" ? (
              <motion.div
                key="prev-arrow"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.span
                key="prev-text"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs tracking-wider"
              >
                PREV
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* HORIZONTAL DIVIDER */}
        <div className="h-[1px] w-10 bg-white/50" />

        {/* NEXT */}
        <button
          onClick={handleNext}
          onMouseEnter={() => setHoveredNav("next")}
          onMouseLeave={() => setHoveredNav(null)}
          className="relative h-8 w-12 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {hoveredNav === "next" ? (
              <motion.div
                key="next-arrow"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.span
                key="next-text"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs tracking-wider"
              >
                NEXT
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* SLIDE COUNTER */}
      <div className="absolute bottom-8 left-6 md:left-8">
        <span className="text-4xl font-bold">{currentSlide}</span>
        <span className="text-sm text-white/50">/{totalSlides}</span>
      </div>
    </section>
  );
};

export default Hero;
