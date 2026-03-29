import React from 'react'

function Title({t1,t2,p1}) {
  return (
   <>
   <h1 className='text-center text-2xl font-bold pt-6 underline underline-offset-4 decoration-red-500 uppercase text-white'>{t1}<span>{t2}</span></h1> 
   <p className='text-white p-7.5 uppercase font-mono'>{p1}</p>
   </>
  )
}

export default Title