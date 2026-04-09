import React from 'react'
import { motion } from 'framer-motion'
import { policies } from '../assets/policy/assets'
import Section from './Section'

function OurPolicy() {
  return (
    <div className="bg-linear-to-b from-black via-gray-900 to-black text-gray-200 overflow-x-hidden">

      {/* HERO SECTION */}
      <div className="text-center py-20 px-6 max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          OUR <span className="text-blue-400">POLICIES</span>
        </motion.h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-400 text-sm md:text-base">
          Built on trust, transparency, and precision.
        </p>

        {/* CTA Button */}
        <button className="mt-10 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
          Contact Support
        </button>

      </div>

      {/* POLICIES SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
        {policies.map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition duration-300"
          >
            <Section {...item} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default OurPolicy
