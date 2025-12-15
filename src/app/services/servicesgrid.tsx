"use client";

export default function ServicesGrid() {
  const services = [
    {
      id: "branding",
      title: "BRANDING & VISUAL IDENTITY",
      desc: "We help ambitious brands craft remarkable identities, create effective advertising and conceive memorable experiences that connect people to their products and services.",
      items: [
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines",
        "Brand Voice",
        "Visual System",
        "Collateral Design",
      ],
    },
    {
      id: "digital-media",
      title: "DIGITAL MEDIA MARKETING",
      desc: "We help ambitious brands craft remarkable identities, create effective advertising and conceive memorable experiences that connect people to their products and services.",
      items: [
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines",
        "Brand Voice",
        "Visual System",
        "Collateral Design",
      ],
    },
    {
      id: "experience",
      title: "EXPERIENCE DESIGN",
      desc: "We help ambitious brands craft remarkable identities, create effective advertising and conceive memorable experiences that connect people to their products and services.",
      items: [
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines",
        "Brand Voice",
        "Visual System",
        "Collateral Design",
      ],
    },
    {
      id: "atl-btl",
      title: "ATL & BTL DESIGN",
      desc: "We help ambitious brands craft remarkable identities, create effective advertising and conceive memorable experiences that connect people to their products and services.",
      items: [
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines",
        "Brand Voice",
        "Visual System",
        "Collateral Design",
      ],
    },
  ];

  const CheckIcon = () => (
    <svg
      width="18"
      height="18"
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
  );

  return (
    <div className="w-full flex justify-center px-4 md:px-8 py-20 bg-[#111111]">
      <div className="w-full max-w-6xl space-y-16">

        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 scroll-mt-24"
          >
            {/* LEFT SIDE — TEXT */}
            <div>
              <h3 className="text-white text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-4 text-sm leading-relaxed max-w-md">
                {service.desc}
              </p>
            </div>

            {/* RIGHT SIDE — BULLET LIST */}
            <div className="grid grid-cols-2 gap-y-3">
              {service.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}