"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    link: "/advertising",
    label: "Advertising & Marketing",
    title: "Campaigns that captivate and convert",
    description: [
      "Great advertising doesn't just get noticed. It sparks emotion, builds connection, and drives action. We create campaigns that cut through the noise, speak directly to your audience, and turn attention into measurable results. From brand awareness to conversion-focused campaigns, we blend creativity with data-driven insights to ensure every message lands with impact and purpose.",
      "Our approach starts with understanding your audience's desires, behaviors, and pain points. We then craft compelling narratives across the right channels, whether digital, traditional, or experiential, ensuring your brand stays top of mind. Through continuous optimization and performance tracking, we help you maximize ROI while building lasting brand equity that fuels long-term growth."
    ],
    services: [
      "Campaign Strategy & Planning",
      "Creative Development & Production",
      "Media Planning & Buying",
      "Digital Marketing & Social Media",
      "Content Marketing & Storytelling",
      "Performance Marketing & Analytics"
    ],
    image: "/services/img5.png",
    imagePosition: "left"
  },
  {
    id: 2,
    link: "/brand-identity",
    label: "Brand identity & Product design",
    title: "Building brands that resonate and endure",
    description: [
      "A strong brand is more than a logo. It is the emotional connection between your business and your audience. We help you craft identities that stand out, tell compelling stories, and build lasting relationships with your customers.",
      "Through strategic positioning, visual identity design, and brand messaging, we ensure your brand speaks authentically to your target market while differentiating you from competitors."
    ],
    services: [
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Brand Messaging & Voice",
      "Brand Guidelines Development"
    ],
    image: "/services/img2.png",
    imagePosition: "right"
  },
  {
    id: 3,
    link: "/services/experience-design",
    label: "EXPERIENCE DESIGN",
    title: "Creating experiences that engage and inspire",
    description: [
      "Great experiences drive loyalty and growth. We design meaningful interactions across every touchpoint, from digital products to physical spaces, ensuring your audience feels valued and connected.",
      "Our human-centered approach combines research, creativity, and strategy to build experiences that are intuitive, memorable, and aligned with your business goals."
    ],
    services: [
      "User Experience (UX) Design",
      "Customer Journey Mapping",
      "Service Design",
      "Digital Product Design"
    ],
    image: "/services/img1.png",
    imagePosition: "left"
  }
];

const ServicesGrid = () => {
  return (
    <section className="w-full bg-[#111111] pb-20">
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="grid grid-cols-1 lg:grid-cols-2 min-h-screen"
        >
          {/* Image Section */}
          <div
            className={`relative h-[50vh] lg:h-screen lg:sticky lg:top-0 ${
              service.imagePosition === "right" ? "lg:order-2" : ""
            }`}
          >
            <Image
              src={service.image}
              alt={service.label}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-8 lg:p-16">
              <h2 className="text-3xl lg:text-4xl text-white">
                {service.label.charAt(0) + service.label.slice(1).toLowerCase()}
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`bg-[#111111] text-white p-8 lg:p-16 flex flex-col justify-center ${
              service.imagePosition === "right" ? "lg:order-1" : ""
            }`}
          >
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="inline-block">
                <span className="text-xs lg:text-sm tracking-widest text-gray-400 uppercase">
                  {service.label}
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl xl:text-4xl leading-tight">
                {service.title}
              </h3>

              <div className="space-y-6 text-gray-300 text-sm lg:text-base leading-relaxed">
                {service.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-sm tracking-widest text-gray-400 uppercase mb-6">
                  {service.label} SERVICES
                </h4>
                <div className="space-y-4">
                  {service.services.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <svg
                        className="w-5 h-5 text-white flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={service.link}
                  className="inline-block bg-white text-black px-8 py-4 rounded-md font-medium hover:bg-gray-200 transition-colors"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGrid;