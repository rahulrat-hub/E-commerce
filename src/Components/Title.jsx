import React from 'react'

function Title({t1,t2,p1,p2}) {
  return (
   <>
   <h1 className='h-10 text-3xl font-mono hover:text-orange-300 text-center pb-0.5 bg-[#172136] mt-1 text-white uppercase'>{t1}<span>{t2}</span></h1> 
   {p1}
   {p2}
   </>
  )
}

export default Title