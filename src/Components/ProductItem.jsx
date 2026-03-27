import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({ image, name, price, index, id }) {
  return (
<Link to={`/product/${id}`} key={index}>
      <div className="h-95 w-62.5 p-3.75 border-2 rounded-t-2xl">
        <img className='h-[70%] w-[99%] rounded-[5px]' src={image} alt={name} />

        <h2 className='font-semibold mt-1 text-sm'>{name}</h2>

        <p className='font-semibold'><span className='text-orange-400'>$</span>{price}</p>

        <button className='font-semibold border-2 h-8.5 w-54.25 rounded-2xl mt-0.5 bg-orange-400'>Add to Cart</button>
      </div>
   </Link> 
  )
}

export default ProductItem
