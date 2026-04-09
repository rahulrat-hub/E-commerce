import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="bg-linear-to-b from-black via-gray-900 to-black text-gray-200 px-6 md:px-16">

      {/* TOP CTA */}
      <div className="text-center py-20 border-b border-gray-800 max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}   // ✅ fixed typo (inital → initial)
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-white mb-4"
        >
          Stay Ahead of the <span className="text-blue-400">Curve</span>
        </motion.h2>

        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-400 text-sm md:text-base">
          Get exclusive updates, drops & offers.
        </p>

        <div className="mt-8 flex justify-center items-center gap-3 flex-col sm:flex-row">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-900 border border-gray-800 px-4 py-3 w-72 text-sm rounded-lg focus:border-blue-500 outline-none transition duration-300"
          />

          <button className="px-6 py-3 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition duration-300">
            Subscribe
          </button>

        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 py-16">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">UNMATCHED</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Redefining modern luxury through simplicity.
          </p>

          <div className="flex gap-4 mt-5 text-gray-400 text-sm">
            <span className="hover:text-blue-400 cursor-pointer transition">Instagram</span>
            <span className="hover:text-blue-400 cursor-pointer transition">Twitter</span>
            <span className="hover:text-blue-400 cursor-pointer transition">LinkedIn</span>
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="mb-4 font-medium text-white">Explore</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Shop</li>
            <li className="hover:text-blue-400 cursor-pointer transition">New Arrivals</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Best Sellers</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="mb-4 font-medium text-white">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">About</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Careers</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Blog</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Press</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="mb-4 font-medium text-white">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
            <li className="hover:text-blue-400 cursor-pointer transition">FAQs</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Shipping</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Returns</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-800 py-6 text-gray-500 text-sm">

        <p>© 2026 YourBrand. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-blue-400 cursor-pointer transition">Privacy</span>
          <span className="hover:text-blue-400 cursor-pointer transition">Terms</span>
          <span className="hover:text-blue-400 cursor-pointer transition">Cookies</span>
        </div>

      </div>

    </footer>
  )
}

export default Footer
