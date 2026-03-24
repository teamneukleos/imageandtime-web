"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#111111] text-white px-6 py-16 border-t border-white-300 border-width-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO */}
          <div className="flex items-start">
            <button onClick={scrollToTop} className="hover:opacity-80 transition">
              <Image
                src="/logo/logo.svg"
                alt="Image & Time"
                width={180}
                height={60}
                priority
              />
            </button>
          </div>


          {/* EMAILS */}
          <div className="space-y-8">

            <div>
              <h3 className="text-lg mb-2">General Enquiries</h3>
              <a
                href="mailto:info@imageandtime.com"
                className="text-gray-300 hover:text-white transition"
              >
                info@imageandtime.com
              </a>
            </div>

            <div>
              <h3 className="text-lg mb-2">Recruitment</h3>
              <a
                href="mailto:recruitment@imageandtime.com"
                className="text-gray-300 hover:text-white transition"
              >
                recruitment@imageandtime.com
              </a>
            </div>

            <div>
              <h3 className="text-lg mb-2">New Business</h3>
              <a
                href="mailto:info@imageandtime.com"
                className="text-gray-300 hover:text-white transition"
              >
                info@imageandtime.com
              </a>
            </div>

          </div>


          {/* ADDRESS */}
          <div className="space-y-6">

            <p className="text-gray-300 leading-relaxed">
              2, Reverend Ogunbiyi Street, <br />
              Ikeja GRA, Lagos, Nigeria
            </p>

            <a
              href="tel:+2348059389855"
              className="text-gray-300 hover:text-white transition"
            >
              +234 805 938 9855
            </a>

          </div>


          {/* SOCIAL + LINKS */}
          <div className="flex flex-col gap-8">

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/imageandtime/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition"
              >
                <Instagram size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/image-&-time/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition"
              >
                <Linkedin size={20} />
              </a>

              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2H21l-6.61 7.56L22 22h-6.828l-5.348-6.993L3.7 22H1l7.08-8.09L2 2h6.828l4.84 6.35L18.244 2z"/>
                </svg>
              </a>

            </div>

            {/* POLICY LINKS */}
            <div className="flex flex-col gap-2 text-gray-300">
              <Link href="#" className="hover:text-white transition">
                Accessibility
              </Link>
              <Link href="#" className="hover:text-white transition">
                Cookie Preferences
              </Link>
              <Link href="#" className="hover:text-white transition">
                Privacy
              </Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;