"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, X } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! We’ll get back to you shortly.");
  };

  return (
    <section className="w-full bg-[#111111] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="inline-block text-xs tracking-widest uppercase text-gray-400 border border-gray-700 rounded-lg px-4 py-2">
              Contact
            </span>

            <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Let’s Talk
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-md">
              Reach out for inquiries, collaborations, or just to say hello.
              We’re eager to connect!
            </p>

            {/* SOCIALS */}
            <div className="space-y-6 pt-6">
              <a
                href="https://www.instagram.com/imageandtime/"
                target="_blank"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                  <Instagram size={18} />
                </span>
                <span className="text-sm tracking-wide">INSTAGRAM</span>
              </a>

              <a
                href="mailto:info@contact.imageandtime.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                  <Mail size={18} />
                </span>
                <span className="text-sm tracking-wide">EMAIL</span>
              </a>

              <a
                href="https://x.com/yourhandle"
                target="_blank"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                  <X size={18} />
                </span>
                <span className="text-sm tracking-wide">X</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM (DUMMY) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] border border-gray-800 p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-gray-200 transition"
              >
                Send message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
