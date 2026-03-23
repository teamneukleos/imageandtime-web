"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // detect desktop screens
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.closest("a, button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isDesktop]);

  // hide on mobile
  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className={`rounded-full bg-[#CC2027] transition-all duration-300 ease-out
        ${
          isHovering
            ? "w-[100px] h-[100px] opacity-30 -translate-x-1/2 -translate-y-1/2"
            : "w-[20px] h-[20px] opacity-70 -translate-x-1/2 -translate-y-1/2"
        }`}
      />
    </div>
  );
}