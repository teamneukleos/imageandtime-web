"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#111111] text-white py-16 px-6 border-t border-white-300 border-width-4">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 ">
          
          {/* SITEMAP */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Sitemap</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-gray-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-400 transition">About Us</Link></li>
              <li><Link href="/culture" className="hover:text-gray-400 transition">People & Culture</Link></li>
              <li><Link href="/services" className="hover:text-gray-400 transition">Our Services</Link></li>
              <li><Link href="/team" className="hover:text-gray-400 transition">The Team</Link></li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://behance.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Subscribe to our Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 ">
          
          {/* LOGO - CLICKABLE */}
          <button 
            onClick={scrollToTop}
            className="hover:opacity-80 transition"
            aria-label="Back to top"
          >
            <Image
              src="/logo/logo.svg"
              alt="Image & Time Logo"
              width={250}
              height={60}
              priority
            />
          </button>

          {/* BACK TO TOP */}
          <button 
            onClick={scrollToTop}
            className="hover:text-gray-400 transition"
          >
            Back to Top
          </button>

          {/* COPYRIGHT */}
          <p className="text-gray-400">
            Copyright Image & Time 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;