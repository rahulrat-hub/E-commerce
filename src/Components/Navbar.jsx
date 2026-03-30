import React from 'react'
import { NavLink } from 'react-router-dom'
import  { assets } from '../assets/frontend_assets/assets'

function Navbar() {
  return (

<div className="flex  bg-black h-18 w-full border-b border-white">
    
  <div className="flex gap-50.5">
      {/* {NAVBAR} */}
<div className="flex gap-6 ml-4 text-[18px] font-bold text-white items-center">
  <NavLink to="/">Home</NavLink>
<NavLink to="/Collection">Collection</NavLink>
<NavLink to="/About">About</NavLink>
  <NavLink to="/Contact">Contact</NavLink>
</div>
{/* {END} */}

{/* {LOGO} */}
<div className="h-20 w-38">
  <img className='' src={assets.logo} alt="" />
</div>
{/* {END} */}
  </div>

<div className="flex ml-74">
  {/* {CART} */}

  <img className='h-19.75 w-23.5 cursor-pointer' src={assets.cart} alt="" />

{/* {LOGIN} */}
<p className='text-white font-semibold p-7 cursor-pointer'>LOG IN</p>
</div>
</div>
  )
}

export default Navbar
