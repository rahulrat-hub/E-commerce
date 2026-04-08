import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'
import { ProductContext } from '../context/ProductContext'

function Navbar() {
  const { getTotalQuantity } = useContext(ProductContext)

  return (
    <div className="bg-black border-b border-gray-800 text-white">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center h-20 px-4">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={assets.logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 font-semibold text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? "text-blue-500" : "hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Collection"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-400 transition"
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-400 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Cart + Login */}
        <div className="flex items-center gap-6 relative">
          <Link to="/cart" className="relative">
            <img src={assets.cart} alt="Cart" className="h-18 w-18 cursor-pointer" />
            {getTotalQuantity() > 0 && (
              <span className="absolute top-4 right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {getTotalQuantity()}
              </span>
            )}
          </Link>

          <Link to="/login" className="text-white font-semibold px-4 py-2 hover:text-blue-400 transition">
            LOG IN
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar