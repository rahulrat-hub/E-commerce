import React from 'react'


function Hero() {
  return (
   <div className="h-143.25 w-321  flex relative">

    {/* {video} */}
   <div className="h-full w-full overflow-hidden mt-0.5 bg-liner-[90deg, #FF6B35, #F59E0B]">
    <video  autoPlay loop muted src="src\assets\frontend_assets\animation.mp4"></video>
   </div>

<div className="absolute top-27.75 left-12 h-85.25 w-85.25 ">
  <h1 className='leading-18 text-6xl font-mono font-bold'>Express <span className='text-white'>Yourself</span> Through Style.</h1>
</div>
 
<div className="absolute bottom-23 right-110.25 h-9.25 w-22.75 border-2 rounded-md cursor-pointer hover:text-amber-400  ">
  <button className="font-semibold p-1 hover:text-black">Shop Now</button>
</div>

   </div>
  )
}

export default Hero


  