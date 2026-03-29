import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='bg-black h-screen w-full overflow-hidden relative'>
      {/* {IMAGE - START} */}
     <img className='h-full w-full object-cover' src={assets.main} alt="" />
      
      {/* {END} */}

    {/* {TITLE} */}
   <div className=" absolute h-10.25 bottom-33.25 left-110.75 p-1.5 ">
     <p className=' text-white text-[20px] font-light'>Luxury Delivered to Your Doorstep</p>
   </div>
   {/* {END} */}

   {/* {BUTTON -START} */}
  <div className="absolute h-9.5 w-26 bottom-22.75 left-146.25 bg-white p-2 ">
     <button className='font-mono cursor-pointer'>SHOP NOW</button>
  </div>

    </div>
  )
}

export default Hero


 
