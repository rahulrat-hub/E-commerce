import React, { useState } from 'react'
import Title from './Title'
import { assets, products } from '../assets/frontend_assets/assets'
import ProductItem from './ProductItem'

function LatestCollection() {
  const [Nproduct, setNproduct] = useState(products)
  return (
    <div className="h-150 w-full bg-[#304352]">
   <div className="">
        <Title
        t1="Latest "
        t2="Collection"
        p1={
        <div className='mt-4 h-40 w-full flex justify-center overflow-hidden gap-6 m-2'>
<img className='rounded-[10px] object-cover shadow-md hover:scale-105 transition-all duration-300  overflow-hidden ' src={assets.banner2} alt="" />
<img className='rounded-[10px] object-cover shadow-md hover:scale-105 transition-all duration-300  overflow-hidden' src={assets.banner} alt="" />
</div>

 }/>
</div>

<div className="flex gap-4 justify-center items-center h-67.5 ">
{
  Nproduct.slice(0,5).map((obj,ind)=> (
  <ProductItem 
  key={ind}
  image={obj.image}
  id={obj.id}
  price={obj.price}
  name={obj.name}
  />
))
}
</div>
</div>
  )
}

export default LatestCollection



