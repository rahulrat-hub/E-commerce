import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({ image, name, price, id }) {
  return (
<Link to={`/product/${id}`}>
      <div className="h-95 w-62.5 p-3.75 border border-gray-400 rounded-2xl ">
        <img className='h-[70%] w-[99%] rounded-[5px]' src={image} alt={name} />

        <h2 className='font-semibold mt-1 text-sm'>{name}</h2>

        <p className='font-semibold text-white'><span className='text-gray-400'>$</span>{price}</p>

        <button onClick={(e)=>{
          e.stopPropagation()
          e.preventDefault()
        }} className='font-semibold border-2 h-8.5 w-54.25 rounded-2xl mt-2 text-black bg-white'>Add to Cart</button>
      </div>
   </Link> 
  )
}

export default ProductItem
