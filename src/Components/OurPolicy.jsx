import React from 'react'
import {motion} from 'framer-motion'
import { policies } from '../assets/policy/assets'
import Section from './Section'




function OurPolicy() {
  return (
    <div className=' bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden'>

{/* {HERO SECTION} */}
<div className="text-center py-15 px-6">
<motion.h1
initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{duration:0.8, ease: "easeOut"}}
className='text-5xl  md:text-7xl font-bold tracking-wide '>
OUR POLICIES   
</motion.h1>

<p className='text-gray-400 text-center mt-4'> Built on trust, transparency, and precision.</p>

<button className='text-black bg-white mt-10 py-4 px-4 hover:bg-gray-500 hover:text-white  transition-all duration-200'>Contact Support</button>
</div>


    
{policies.map((item, i) => (
  <Section key={i} {...item}  />
))}
</div>
  )
}

export default OurPolicy