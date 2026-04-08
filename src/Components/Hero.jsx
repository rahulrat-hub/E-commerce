import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={assets.main}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-1">

       {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base max-w-xl mb-6">
          Experience premium quality, timeless design, and seamless shopping —
          crafted for those who value excellence.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-2 md:px-6 md:py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 text-sm md:text-base">
            Shop Now
          </button>

          <button className="px-6 py-2 md:px-6 md:py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white transition duration-300 text-sm md:text-base">
            Explore Collection
          </button>
        </div>

      </div>

    </div>
  )
}

export default Hero
