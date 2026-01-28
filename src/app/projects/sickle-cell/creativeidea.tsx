import React from "react";

export default function CreativeIdea() {
  return (
    <section className="w-full bg-[#0D0D0D] py-28 px-6 md:px-12">
      {/* SECTION TEXT - ALIGNED WITH SICKLE CELL CONTENT */}
      <div className="max-w-5xl mx-auto mb-20 mt-[-50px]">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Creative Idea</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            For World Sickle Cell Day, the task was to create a campaign that would raise awareness 
            and inspire advocacy in a country where 150,000 babies are born annually with sickle cell 
            disease and 40 million Nigerians are healthy carriers of the gene. The concept, titled 
            Heartbeat of Nigeria, was designed to humanize those living with sickle cell by moving 
            beyond the limiting label of “sickler” and instead celebrating their identities as mothers, 
            teachers, engineers, and fellow Nigerians. By centering the campaign on the universal symbol of the heartbeat, the idea tapped into the emotional power of connection, ensuring that the message felt authentic, memorable, and deeply tied to the nation’s collective identity.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            The creative execution invited Nigerians to share their own heartbeat recordings and 
            dedicate them to warriors who bore the same names, tribes, or professions. These heartbeats 
            were woven together into a unified rhythm, symbolizing resilience and unity across the country. 
            Through installations, digital activations, and personal storytelling, the campaign showcased 
            sickle cell warriors not as outsiders but as integral members of the Nigerian family. 
            This approach not only erased the stigmatizing label but also emphasized the shared humanity and enduring strength of those living with sickle cell, positioning them as part of the rhythm that keeps Nigeria alive.
          </p>
        </div>
      </div>

      {/* IMAGE - CENTERED */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-0">
        <img src="/sickle-cell/img1.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/img2.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/img3.png" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/img4.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/img5.jpg" alt="Creative Idea Image" className="w-full object-cover" />
        <img src="/sickle-cell/img6.jpg" alt="Creative Idea Image" className="w-full object-cover" />
      </div>

      
    </section>
  );
}