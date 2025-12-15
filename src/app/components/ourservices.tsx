"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Branding & Visual Identity",
    image: "/services/branding.png",
    link: "/services/branding",
  },
  {
    title: "ATL & BTL Design",
    image: "/services/Atl-btl.png",
    link: "/services/atl-btl",
  },
  {
    title: "Digital Media marketing",
    image: "/services/digital-media.png",
    link: "/services/digital-media",
  },
  {
    title: "Experience design",
    image: "/services/experience.png",
    link: "/services/experience",
  },
];

const OurServices = () => {
  return (
    <section className="w-full px-6 md:px-14 lg:px-24 py-20 bg-[#111111] text-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">Services</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden
              group transition cursor-pointer
            "
          >
            {/* Service Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-all duration-500"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* TEXT + ARROW BUTTON */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium leading-tight">
                {service.title}
              </h3>

              {/* Arrow Button */}
              <Link href={service.link}>
                <div>
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
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;