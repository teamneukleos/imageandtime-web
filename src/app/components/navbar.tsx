"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 md:px-8 py-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.svg"
            alt="Image & Time Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-white">
          <Link href="/" className="hover:opacity-80 transition">Home</Link>
          <Link href="/about" className="hover:opacity-80 transition">About Us</Link>
          <Link href="/services" className="hover:opacity-80 transition">Services</Link>
           <Link href="/projects" className="hover:opacity-80 transition">Projects</Link>

          <Link
            href="/contact"
            className="
              bg-white/90 text-black px-5 py-2 rounded-xl font-medium
              flex items-center gap-2 hover:bg-white transition
            "
          >
            Contact us
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm text-white px-6 py-5 space-y-6">
          
          <Link
            href="/"
            className="block text-sm"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-sm"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
           <Link
            href="/services"
            className="block text-sm"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="block text-sm"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="
              bg-white text-black px-4 py-2 rounded-xl font-medium
              inline-flex items-center gap-2 text-sm
            "
          >
            Contact us
            <ArrowUpRight size={18} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;