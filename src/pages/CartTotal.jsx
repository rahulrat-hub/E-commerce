import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'

function CartTotal() {
    const {totalcart,cartItem } =  useContext(ProductContext)
const [tv, settv] = useState(0);
    useEffect(() => { 
     let result = totalcart()
    settv(result)
    // console.log(tv)
    }, [cartItem])
  return (
      <div className="m-10 p-6 bg-[#1f2937] rounded-2xl text-white">
        <h2 className="text-xl font-bold mb-4">Cart Total</h2>

        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${tv}</p>
        </div>

        <div className="flex justify-between mt-2">
          <p>Shipping</p>
          <p>$50</p>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>${tv + 50}</p>
        </div>
      </div>
  )
}

export default CartTotal