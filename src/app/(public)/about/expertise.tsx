import Image from "next/image";

const Expertise = () => {
  const features = [
    "Measurable Proven Results",
    "Innovative Real Solutions",
    "Customized Business Strategy",
    "Reliable Expert Guidance",
    "Multi Industry Expertise",
    "Support Long Term",
  ];

  return (
    <section className="w-full bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <Image
            src="/about/team-2.png"
            alt="Image & Time Team"
            width={600}
            height={700}
            className="object-cover w-full rounded-md"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white space-y-8">
          <h2 className="text-2xl md:text-2xl font-semibold leading-tight">
            Unlock our expertise to drive success across industries
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            We help organizations unlock their full potential by creating team 
            experiences that restore trust, deepen connection, and drive meaningful 
            internal growth.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" fill="#CC2027" />
                  <path
                    d="M7 12L10.5 15.5L17 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-base md:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;