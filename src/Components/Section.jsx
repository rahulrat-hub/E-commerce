import React from "react";
import { motion } from "framer-motion";

function Section({ title, text, img, reverse }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-20 py-16">

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{  margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-400 leading-relaxed">{text}</p>

        <button className="mt-6 border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
          Learn More
        </button>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-hidden rounded-xl"
      >
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-87.5 object-cover transform hover:scale-110 transition duration-500"
        />
      </motion.div>

    </div>
  );
}

export default Section;
