"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { subscribeNewsletter } from "@/app/newsletter";

const initialState = { success: false, error: "" };

async function subscribeAction(_prevState: typeof initialState, formData: FormData) {
  try {
    await subscribeNewsletter(formData);
    return { success: true, error: "" };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

const Footer = () => {
  const [state, formAction] = useActionState(subscribeAction, initialState);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#111111] text-white py-16 px-6 border-t border-white-300 border-width-4">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* SITEMAP */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Sitemap</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-gray-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-400 transition">Our Services</Link></li>
              <li><Link href="/about#our-team" className="hover:text-gray-400 transition">The Team</Link></li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/imageandtime/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/image-&-time/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                  Behance
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Subscribe to our Newsletter</h3>

            {state.success ? (
              // ✅ SUCCESS STATE
              <div className="space-y-2">
                <p className="text-green-400 text-sm font-medium">✓ You're subscribed!</p>
                <p className="text-gray-400 text-xs">Thanks for joining — we'll be in touch soon.</p>
              </div>
            ) : (
              // 📬 FORM STATE
              <form action={formAction} className="space-y-4">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {state.error && (
                  <p className="text-red-400 text-xs">{state.error}</p>
                )}
                <button
                  type="submit"
                  className="px-6 py-3 border border-white rounded-2xl hover:bg-white hover:text-black transition"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">

          {/* LOGO - CLICKABLE */}
          <button onClick={scrollToTop} className="hover:opacity-80 transition" aria-label="Back to top">
            <Image src="/logo/logo.svg" alt="Image & Time Logo" width={250} height={60} priority />
          </button>

          {/* BACK TO TOP */}
          <button onClick={scrollToTop} className="hover:text-gray-400 transition">
            Back to Top
          </button>

          {/* COPYRIGHT */}
          <p className="text-gray-400">
            © {new Date().getFullYear()} Image & Time. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;