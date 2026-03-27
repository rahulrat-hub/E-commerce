import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

function Navbar() {
  const [visible, setVisible] = useState(false)

  return (
    <div className='bg-[#172136] border-b w-sceen'>

      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <img className='h-12' src={assets.logo} alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-white font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Collection">Collection</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ">
          <Link to="/cart">
            <img className='h-8'  src={assets.cart} alt="cart" />
          </Link>

          <h1 className='text-white cursor-pointer'>Log In</h1>

          {/* Hamburger */}
          <img
            onClick={() => setVisible(true)}
            className='h-8 cursor-pointer sm:hidden'
            src={assets.menu}
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#172136] text-white transition-all duration-300 ${
          visible ? 'w-2/3' : 'w-0'
        } overflow-hidden`}
      >

        {/* Close Button */}
        <div className="p-4">
          <img
            onClick={() => setVisible(false)}
            className="h-6 cursor-pointer"
            src={assets.cross_icon}
            alt="close"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 p-6 text-lg">
          <NavLink onClick={()=>setVisible(false)} to="/">Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/Collection">Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/About">About</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/Contact">Contact</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
