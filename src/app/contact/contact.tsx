"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, X, CheckCircle } from "lucide-react";
import { sendEmail } from "../actions";
import { useActionState } from "react"; 

const initialState = { success: false, error: "" };

async function sendEmailAction(_prevState: typeof initialState, formData: FormData) {
  try {
    await sendEmail(formData);
    return { success: true, error: "" };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export default function ContactSection() {
  const [state, formAction] = useActionState(sendEmailAction, initialState);

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
              Let's Talk
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-md">
              Reach out for inquiries, collaborations, or just to say hello.
              We're eager to connect!
            </p>

            {/* SOCIALS */}
            <div className="space-y-6 pt-6">
              <a href="https://www.instagram.com/imageandtime/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                  <Instagram size={18} />
                </span>
                <span className="text-sm tracking-wide">INSTAGRAM</span>
              </a>
              <a href="mailto:info@contact.imageandtime.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                  <Mail size={18} />
                </span>
                <span className="text-sm tracking-wide">EMAIL</span>
              </a>
              <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                  <X size={18} />
                </span>
                <span className="text-sm tracking-wide">X</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] border border-gray-800 p-8 md:p-10"
          >
            {state.success ? (
              // ✅ SUCCESS STATE
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <CheckCircle size={48} className="text-white" />
                <h3 className="text-2xl font-light text-white">Message Sent</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Thanks for reaching out! We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              // 📬 FORM STATE
              <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Name</label>
                    <input
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white resize-none"
                  />
                </div>

                {/* Error message */}
                {state.error && (
                  <p className="text-red-400 text-sm">{state.error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-gray-200 transition"
                >
                  Send message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}