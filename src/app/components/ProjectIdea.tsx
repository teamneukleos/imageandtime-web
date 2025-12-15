"use client";

import Image from "next/image";

const ProjectIdea = () => {
  return (
    <section className="w-full px-6 md:px-14 lg:px-24 py-20 bg-[#111111] flex justify-center">
      <div
        className="
          w-full max-w-6xl bg-[#595959] rounded-2xl 
          p-8 md:p-12 flex flex-col md:flex-row items-center gap-10
        "
      >
        {/* LEFT SIDE */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-white text-2xl md:text-2xl leading-snug mb-10">
            Have an amazing <br /> project idea in mind?
          </h2>

          {/* Email Label */}
          <label className="text-white/80 block mb-2">Email</label>

          {/* Underline Input */}
          <input
            type="email"
            placeholder=""
            className="
              w-full bg-transparent outline-none border-b border-white/40 
              text-white pb-1
            "
          />

          {/* BUTTON */}
          <div className="mt-8">
            <button
              className="
                flex items-center gap-4 bg-[#CC2027] text-white 
                px-8 py-3 rounded-full text-sm font-medium
                hover:bg-[#a32e30] transition
              "
            >
              Book a Call

              {/* Arrow Icon */}
              <span
                className="
                  w-10 h-10 flex items-center justify-center rounded-full 
                  bg-white text-black
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M17 17V7H7"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 w-full h-[260px] md:h-[320px] relative rounded-2xl overflow-hidden">
          <Image
            src="/images/project-idea.png"
            alt="Project Idea"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectIdea;
