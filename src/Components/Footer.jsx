import { duration } from '@mui/material/styles'
import React from 'react'
import {motion} from 'framer-motion'

function Footer() {
  return (
 <footer className='bg-[#0A0A0A] text-white px-6 md:px-16'>

{/* {TOP CTA} */}
<div className="text-center py-20 border-b border-[#1A1A1A]">
<motion.h2
inital={{opacity:0, y:30}}
whieInView={{opacity:1, y:0}}
transition={{duration:0.6}}
className='text-3xl md:text-5xl font-semibold tracking-wide '
>
Stay Ahead of the Curve
</motion.h2>

<p className='text-gray-400 mt-4 text-sm md:text-base'>Get exclusive updates, drops & offers.</p>

<div className='mt-8 flex justify-center items-center gap-3 flex-col sm:flex-row'>
  <input type="email"
   placeholder='Enter Your E-mail'
   className='bg-transparent border border-[#2A2A2A] px-4 py-3 w-72 text-sm focus:border-white transition-colors duration-300 ease-out'
   />  

<button className='px-6 py-3 bg-white text-black text-sm tracking-wide hover:opacity-80 transition duration-300 ease-out'>Subscribe</button>
</div>
</div>

{/* MAIN GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold mb-4">UNMATCHED</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Redefining modern luxury through simplicity.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-5 text-gray-400 text-sm">
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="mb-4 font-medium">Explore</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="mb-4 font-medium">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="mb-4 font-medium">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#1A1A1A] py-6 text-gray-500 text-sm">
        <p>© 2026 YourBrand. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>

    </footer>
  );
}
export default Footer