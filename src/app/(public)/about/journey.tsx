import Image from "next/image";

const Journey = () => {
  const milestones = [
    {
      title: "From Humble beginnings",
      description:
        "Our story begins in a small workplace in 1999, founded on a simple belief: that the right strategy and creative spark can transform any challenge into opportunity. It was here, with a dedicated core team and big ambitions, that our end-user obsession philosophy took root.",
      image: "/about/humble-beginnings.png",
    },
    {
      title: "Milestone and Achievements",
      description:
        "Driven by that founding belief, our journey has been marked by significant growth and recognition. We’ve celebrated industry awards for innovation, successfully guided over 500 campaigns, formed strategic partnerships with major brands, and, most importantly, helped our clients achieve measurable and lasting impact.",
      image: "/about/milestone.png",
    },
    {
      title: "Our Global Reach",
      description:"Today, our influence extends far beyond our original walls. With a network of partners and clients across two continents, we bring a uniquely adaptable perspective to every project. We operate globally but execute locally, ensuring our work resonates culturally and drives results in diverse markets from Lagos to London.",
      image: "/about/global-reach.png",
    },
    {
      title: "Looking Ahead",
      description:
        "Our vision for the future is clear: to continue pioneering the intersection of design, creativity, and human connection. We are investing in emerging technologies, nurturing the next generation of talent, and relentlessly focusing on building sustainable growth for our partners. The next chapter is about scaling our impact without ever losing the agile, passionate spirit we started with.",
      image: "/about/looking-ahead.png",
    },
  ];

  return (
    <section className="w-full bg-[#111111] py-8 md:py-24 px-6">
     <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-20">
          <h2 className="text-xl md:text-3xl font-semibold text-white max-w-lg leading-snug">
            Our Journey: Key Points <br /> and Milestones
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-md">
            The Image and Time story, transforming spaces with innovative
            designs, explore the story of our creativity and Advertising
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-20">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0; 

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
              >
                {/* LEFT COLUMN */}
                {isEven ? (
                  <>
                    {/* TEXT LEFT */}
                    <div>
                      <h3 className="text-white text-lg md:text-lg font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-sm max-w-md leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* IMAGE RIGHT */}
                    <div className="w-full">
                      <div className="rounded-2xl overflow-hidden w-full h-[240px] md:h-[280px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={350}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* IMAGE LEFT */}
                    <div className="w-full md:order-1">
                      <div className="rounded-2xl overflow-hidden w-full h-[240px] md:h-[280px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={350}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* TEXT RIGHT */}
                    <div className="md:order-2">
                      <h3 className="text-white text-lg md:text-lg font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-sm max-w-md leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;