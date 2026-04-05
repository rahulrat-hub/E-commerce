import React from 'react'
import {motion} from 'framer-motion'

function Contact() {
  return (
   
   <div className='bg-black min-h-screen'>

{/* {HEADING} */}
<h1 className='text-white text-center text-3xl font-bold pt-12 tracking-wide'>Contact Us</h1>
  <p className='text-gray-400 text-center pt-4 '>We'd love to hear from you.Reach at anytime</p>


{/* {Flex} */}
<div className="flex max-w-5xl px-5 gap-10 my-8 ml-20">

{/* {LEFT INFO} */}
<motion.div className="">
<h4 className='text-white text-[20px] tracking-wide py-2'>Get In Touch</h4>
<p className='text-gray-400 text-sm py-4 leading-relaxed'>Whether you have a question about products, pricing, or anything else, our team is ready to answer all your questions.</p>


<div className="space-y-4 text-sm text-gray-400 ">
  <p className='text-white'>📍 Rishikesh, India</p>
  <p className='text-white'>📧 support@example.com</p>
   <p className='text-white'>📞 +91 98765 43210</p>
</div>
</motion.div>

{/* {RIGHT INFO} */}

<motion.form className='flex flex-col gap-10 py-10 px-8 border border-white w-full h-full rounded-xl'>

{/* {NAME} */}
<input type="text"
placeholder='Your Name'
className='text-white  border border-[#2A2A2A] py-2 px-2 rounded-[10px] hover:border-white transition-all duration-300 ease-in-out' 
/>

{/* {EMAIL} */}

<input type="text" 
placeholder='Enter E-mail'
className='text-white  border border-[#2A2A2A] py-2 px-2 rounded-[10px] hover:border-white transition-all duration-300 ease-in-out'
/>

{/* {FEEDBACK} */}

<input type="text" 
placeholder='Enter Your FeedBack'
className='text-white  border border-[#2A2A2A] py-8 px-2  rounded-[10px] focus:bg-white transition-color duration-300 ease-in'
/>

{/* {BUTTON} */}

<button className='text-black bg-white hover:bg-gray-200 py-2 px-2 rounded-[10px] transition cursor-pointer'>Send Message</button>
</motion.form>




</div>















































    </div>
  )
}

export default Contact