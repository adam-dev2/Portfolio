import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }} 
      className="bg-zinc-900 text-gray-300 py-16 px-8 md:px-20 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section - Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-4"
        >
          <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
          <p className="text-gray-400 text-lg italic">
            “Opportunities don’t happen, you create them.”  
          </p>
          <p className="text-gray-500 text-sm">
            Whether you have an idea, a project, or just want to say hi—let’s chat! :)
          </p>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-800 p-6 rounded-xl shadow-lg"
        >
          <form
            action="https://formsubmit.co/el/hehedi"
            method="POST"
            className="flex flex-col gap-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 bg-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-zinc-500 text-white"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 bg-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-zinc-500 text-white"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="p-3 bg-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-zinc-500 text-white"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="bg-zinc-900 hover:bg-zinc-200 hover:text-zinc-800 text-white py-3 rounded-lg font-semibold shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;
