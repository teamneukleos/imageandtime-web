"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-bg.jpg",
    subtitleDesktop: (
      <>
        We design brands,<br />not just campaigns.
      </>
    ),
    subtitleMobile: (
      <>
        We design brands,
        not just campaigns.
      </>
    ),
  },
  {
    image: "/images/herobg-2.png",
    subtitleDesktop: (
      <>
        We don't only make ads<br />that don't feel like ads.
      </>
    ),
    subtitleMobile: (
      <>
        We don't only
        make ads that don't
        feel like ads.
      </>
    ),
  },
  {
    image: "/images/herobg3.png",
    subtitleDesktop: (
      <>
        We build brands people recognise,<br />trust, and want to belong to.
      </>
    ),
    subtitleMobile: (
      <>
        We build brands
        people recognise,
        trust, and want
        to belong to.
      </>
    ),
  },
  {
    image: "/images/herobg-4.jpg",
    subtitleDesktop: (
      <>
        And we design experiences that<br />make organisations feel human again.
      </>
    ),
    subtitleMobile: (
      <>
        And we design
        experiences that
        make organisations
        feel human again.
      </>
    ),
  },
  {
    image: "/images/hero-bg-5.jpg",
    subtitleDesktop: (
      <>
        Because humans are not creatures of logic.<br />They are creatures of emotion.
      </>
    ),
    subtitleMobile: (
      <>
        Because humans
        are not creatures
        of logic. They are
        creatures of emotion.
      </>
    ),
  },
  {
    image: "/images/hero-bg-6.png",
    subtitleDesktop: (
      <>
        Whether we're building a brand, a product,<br />
        or a workplace culture, we always start<br />
        with one question: What do you want<br />
        people to feel?
      </>
    ),
    subtitleMobile: (
      <>
        Whether we're
        building a brand,<br />
        a product, or a
        workplace culture,<br />
        we always start with
        one question: What
        do you want people
        to feel?
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

      {/* GRADIENTS */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent -z-10" />

      {/* CONTENT - DESKTOP */}
      <div className="hidden md:block w-full mt-80 px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
              {slide.subtitleDesktop}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT - MOBILE */}
      <div className="block md:hidden w-full mt-64 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-base max-w-xs leading-relaxed">
              {slide.subtitleMobile}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* PREV / NEXT — DESKTOP ONLY */}
      <div className="hidden md:flex absolute bottom-56 right-12 items-center gap-6">
        
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

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 h-16 w-[2px] overflow-hidden">
        <motion.div
          className="w-full h-8 bg-white"
          animate={{ y: ["-100%", "200%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.5,
          }}
        />
      </div>

      {/* SLIDE COUNTER */}
      <div className="absolute bottom-8 left-6 md:left-8">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {currentSlide}
        </span>
        <span className="text-xs md:text-sm text-white/50 ml-1">
          /{totalSlides}
        </span>
      </div>
    </section>
  );
};

export default Hero;
