import Image from "next/image";

const Journey = () => {
  const milestones = [
    {
      title: "From Humble beginnings",
      description:
        "Our story begins in a small workplace in 2010. Lorem ipsum dolor sit amet consectetur. Sed sagittis cursus eleifend ut sit et.",
      image: "/about/humble-beginnings.png",
    },
    {
      title: "Milestone and Achievements",
      description:
        "Our story begins in a small workplace in 2010. Lorem ipsum dolor sit amet consectetur. Sed sagittis cursus eleifend ut sit et.",
      image: "/about/milestone.png",
    },
    {
      title: "Our Global Reach",
      description:
        "Our story begins in a small workplace in 2010. Lorem ipsum dolor sit amet consectetur. Sed sagittis cursus eleifend ut sit et.",
      image: "/about/global-reach.png",
    },
    {
      title: "Looking Ahead",
      description:
        "Our story begins in a small workplace in 2010. Lorem ipsum dolor sit amet consectetur. Sed sagittis cursus eleifend ut sit et.",
      image: "/about/looking-ahead.png",
    },
  ];

  return (
    <section className="w-full bg-[#111111] py-8 md:py-24 px-6">
     <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-20">
          <h2 className="text-2xl md:text-4xl font-semibold text-white max-w-lg leading-snug">
            Our Journey: Key Points <br /> and Milestones
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-md">
            The Image and Time story, transforming spaces with innovative
            designs, explore the story of our creativity and Advertising
          </p>
        </div>

        {/* LIST (Correct Alternating Layout) */}
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
                      <p className="text-gray-300 text-sm md:text-lg max-w-md leading-relaxed">
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
                      <p className="text-gray-300 text-sm md:text-lg max-w-md leading-relaxed">
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