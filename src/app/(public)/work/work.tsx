"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";


interface FeaturedCampaign {
  id: string;
  client: string;
  title: string;
  videoSrc: string;
  posterSrc?: string;
  href: string;
}

interface GridCampaign {
  id: string;
  client: string;
  title: string;
  videoSrc?: string;
  imageSrc?: string;
  posterSrc?: string;
  href: string;
}


const featuredCampaigns: FeaturedCampaign[] = [
  {
    id: "Haier-thermocool",
    client: "Haier Thermocool",
    title: "Always there for you",
    videoSrc: "/videos/haier-thermocool.mp4",
    posterSrc: "/haier-thermocool/thumbnail.png",
    href: "/projects/haier-thermocool",
  },
  {
    id: "Union-bank",
    client: "Union Bank",
    title: "Enabling Success",
    videoSrc: "/videos/union-bank.mp4",
    posterSrc: "/union/thumbnail.png",
    href: "/projects/union-bank",
  },
];

const gridCampaigns: GridCampaign[] = [
  {
    id: "Maggi",
    client: "Maggi",
    title: "Cooking is Music with MAGGI",
    imageSrc: "/maggi/img1.jpg",
    href: "/projects/maggi",
  },
  {
    id: "Sickle Cell Foundation",
    client: "Sickle Cell Foundation",
    title: "Love a Nigerian",
    videoSrc: "/videos/sickle-cell-foundation.mp4",
    posterSrc: "/sickle-cell/thumbnail.png",
    href: "/projects/sickle-cell",
  },
  {
    id: "Lacasera",
    client: "Lacasera",
    title: "This is not a full stop",
    imageSrc: "/work/lacasera.png",
    href: "/projects/lacasera",
  },
  {
    id: "Nestle pure life ",
    client: "Nestle pure life",
    title: "Life of the Party",
    imageSrc: "/work/nestle-purelife.png",
    href: "/projects/nestle",
  },
];

// Hover-to-play hook 

function useHoverVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  const onMouseEnter = useCallback(() => {
    ref.current?.play().catch(() => { });
  }, []);

  const onMouseLeave = useCallback(() => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }, []);

  return { ref, onMouseEnter, onMouseLeave };
}

// Featured Video Block 

function FeaturedVideo({ campaign }: { campaign: FeaturedCampaign }) {
  const { ref, onMouseEnter, onMouseLeave } = useHoverVideo();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full">
      {/* Full-bleed video */}
      <Link
        href={campaign.href}
        className="block w-full overflow-hidden relative aspect-[16/9] md:h-[70vh] lg:h-[90vh]"
        onMouseEnter={() => { setIsHovered(true); onMouseEnter(); }}
        onMouseLeave={() => { setIsHovered(false); onMouseLeave(); }}
      >
        <video
          ref={ref}
          src={campaign.videoSrc}
          poster={campaign.posterSrc}
          muted
          playsInline
          loop
          preload="auto"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? "scale-[1.02]" : "scale-100"
            }`}
        />
      </Link>

      {/* Caption row */}
      <div className="flex items-start justify-between pt-4 pb-10 border-t ">
        <span className="text-sm tracking-wide text-white">
          {campaign.client}
        </span>
        <Link
          href={campaign.href}
          className="text-sm tracking-wide text-white hover:underline"
        >
          {campaign.title}
        </Link>
      </div>
    </div>
  );
}

// Grid card

function GridCard({ campaign }: { campaign: GridCampaign }) {
  const { ref, onMouseEnter, onMouseLeave } = useHoverVideo();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full">
      <Link
        href={campaign.href}
        className="block w-full overflow-hidden relative bg-gray-800 aspect-[16/10]"
        onMouseEnter={() => {
          setIsHovered(true);
          if (campaign.videoSrc) onMouseEnter();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (campaign.videoSrc) onMouseLeave();
        }}
      >
        {campaign.videoSrc ? (
          <video
            ref={ref}
            src={campaign.videoSrc}
            poster={campaign.posterSrc}
            muted
            playsInline
            loop
            preload="auto"
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? "scale-[1.03]" : "scale-100"
              }`}
          />
        ) : (
          <img
            src={campaign.imageSrc}
            alt={campaign.title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? "scale-[1.03]" : "scale-100"
              }`}
          />
        )}
      </Link>

      {/* Caption below card */}
      <div className="flex items-start justify-between pt-3 pb-8">
        <span className="text-sm text-white">{campaign.client}</span>
        <Link
          href={campaign.href}
          className="text-sm text-white hover:underline"
        >
          {campaign.title}
        </Link>
      </div>
    </div>
  );
}

// Page 

export default function Work() {
  return (
    <main className="min-h-screen bg-[#111111]">

      {/* Hero*/}
      <section className="px-6 md:px-8 pt-28 pb-16">
        <h1 className="font-black leading-[0.92] tracking-tight mb-10 text-white text-[2rem] sm:text-[2.75rem] md:text-[4.5rem] lg:text-[6.5rem] xl:text-[8.5rem]">
          We Make Ideas <br />
          People Actually <br />
          Care About.
        </h1>

        <div className="max-w-2xl space-y-5">
          <p className="text-base leading-relaxed text-white/70">
            We create work that connects — not just visually, but emotionally.
            From campaigns that spark conversations to ideas that live beyond the screen,
            everything we do is built around people first.
          </p>
          <p className="text-base leading-relaxed text-white">
            This is a collection of the stories we’ve helped shape, the brands we’ve
            partnered with, and the impact we’ve created along the way.
          </p>
        </div>
      </section>

      {/*Featured Campaign */}
      <div className="px-6 md:px-8 space-y-24">
        {featuredCampaigns.map((campaign) => (
          <FeaturedVideo key={campaign.id} campaign={campaign} />
        ))}
      </div>

      {/* Campaign Grid */}
      <section className="px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {gridCampaigns.map((c) => (
            <GridCard key={c.id} campaign={c} />
          ))}
        </div>
      </section>

    </main>
  );
}