"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section
      className="
        relative w-full min-h-screen
        flex flex-col items-start justify-center
        text-white overflow-hidden
      "
    >
      {/* STATIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/services/serviceshero.png"
          alt="Service Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* CONTENT */}
      <div className="w-full mt-32 px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base md:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed"
        >
          We help ambitious brands craft remarkable <br />
          identities create effective advertising and <br />
          conceive memorable experiences that connect <br />
          people to their products and services.
        </motion.p>
      </div>

      {/* ANIMATED VERTICAL LINE */}
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
    </section>
  );
};

export default ServiceHero;
