import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="bg-black min-h-screen text-white px-6">

      {/* Heading */}
      <div className="text-center pt-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Contact Us
        </h1>
        <p className="text-gray-400 mt-3">
          We'd love to hear from you. Reach out anytime.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row gap-10">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Whether you have a question about products, pricing, or anything else,
            our team is ready to answer all your questions.
          </p>

          <div className="space-y-4 text-sm">
            <p className="text-gray-300">📍 Rishikesh, India</p>
            <p className="text-gray-300">📧 support@example.com</p>
            <p className="text-gray-300">📞 +91 98765 43210</p>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col gap-5"
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            className="bg-black border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Enter your message..."
            className="bg-black border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
          ></textarea>

          {/* Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition font-medium">
            Send Message
          </button>

        </motion.form>

      </div>
    </div>
  )
}

export default Contact