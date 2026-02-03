import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-28 px-6 md:px-12">
      
      {/* SECTION TEXT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">

          {/* The Problem */}
          <h2 className="text-xl font-semibold text-white">The Problem</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Sickle cell disease affects thousands of Nigerians, yet those living with it are often reduced to the label “sickler,” stripping them of identity and humanity. The Sickle Cell Foundation needed a campaign that would drive awareness while restoring dignity.
          </p>

          {/* Insight */}
          <h2 className="text-xl font-semibold text-white mt-6">Insight</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Labels create distance. Names create connection. When people are reduced to conditions, empathy disappears. When they are seen as individuals, compassion follows.
          </p>

          {/* Big Idea */}
          <h2 className="text-xl font-semibold text-white mt-6">Big Idea</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            <strong>LOVE A NIGERIAN</strong><br />
            We ripped the label off. The campaign reframed people living with sickle cell as Nigerians first. Ayo. Bisi. Demola. Mothers. Teachers. Engineers. Nigerians were invited to send love notes to people with sickle cell who shared their names, creating emotional links between strangers. The result humanized the condition, replacing stigma with empathy and advocacy.
          </p>

        </div>
      </div>

      {/* IMAGE - CENTERED */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-0">
        <img src="/sickle-cell/sickle-cell-1.gif" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/sickle-cell-2.gif" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/sickle-cell-3.gif" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/img4.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/img5.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/img6.jpg" alt="Creative Idea Image" className="w-full object-cover" />
      </div>

    </section>
  );
}
