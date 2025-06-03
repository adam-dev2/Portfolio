import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-zinc-900 text-gray-300 py-16 px-8 md:px-20 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Stay Connected</h2>
        <p className="text-gray-400 mb-8">
          Drop your email and I'll get back to you!
        </p>

        <form
          action="https://formsubmit.co/el/hehedi"
          method="POST"
          className="flex justify-center"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 bg-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-zinc-500 text-white w-72"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-zinc-800 ml-2 hover:bg-zinc-400 cursor-pointer hover:text-zinc-800 text-white py-3 px-6 rounded-lg font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
