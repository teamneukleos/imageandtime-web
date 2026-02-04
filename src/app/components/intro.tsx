"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="w-full bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* LEFT TEXT SECTION */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-white text-2xl md:text-4xl md:mb-16 font-semibold leading-tight">
            We are{" "}
            <Image
              src="/logo/logo.svg"
              alt="Image & Time full logo"
              width={290}
              height={80}
              className="inline-block align-middle mx-2 w-40 md:w-56 lg:w-64"
              priority
            />
            , a world leading Advertising and creative agency.
          </h2>

          {/* READ MORE BUTTON */}
          <Link
            href="/about"
            className="flex items-center gap-3 text-white group"
          >
            <span className="text-lg">Read More</span>

            <svg
              width="71"
              height="43"
              viewBox="0 0 71 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.202 21.8019C50.4793 21.5246 50.4793 21.075 50.202 20.7978L45.6836 16.2793C45.4064 16.0021 44.9568 16.0021 44.6795 16.2793C44.4023 16.5566 44.4023 17.0062 44.6795 17.2834L48.6959 21.2998L44.6795 25.3162C44.4023 25.5934 44.4023 26.043 44.6795 26.3203C44.9568 26.5975 45.4064 26.5975 45.6836 26.3203L50.202 21.8019ZM0 22.0098H49.7V20.5898H0V22.0098Z"
                fill="white"
              />
              <circle
                cx="49.6984"
                cy="21.3"
                r="20.945"
                stroke="#CC2027"
                strokeWidth="0.71"
              />
            </svg>
          </Link>
        </div>

        {/* RIGHT LOGO (SVG) */}
        <div className="hidden lg:block">
          <img
            src="/logo/and-logo.svg"
            alt="Image & Time Symbol"
            className="w-[280px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
