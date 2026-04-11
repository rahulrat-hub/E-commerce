import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { products } from '../assets/frontend_assets/assets';


function Cart() {
 const {cartItem, increaseQty, decreaseQty, totalcart } =  useContext(ProductContext)
const [newData, setnewData] = useState([])
const [tv, settv] = useState(0);

function FormateData(){
  let tempdata = [];

  for(let id in cartItem){
    for(let size in cartItem[id]){
      tempdata.push({
        _id : id,
        size : size,
        quantity : cartItem[id][size]
      })
    }
  }
  setnewData(tempdata);
}

useEffect(() => { 
  FormateData();
let result = totalcart()
settv(result)
// console.log(tv)
}, [cartItem])
 
  return (
    <div className="">
  {newData.map((i,ind)=>{
    let productData = products.find(obj=>obj._id === i._id);

    return productData ? (  
      // {container}
  <>
      <div key={ind} className="h-32 m-10 border rounded-2xl bg-[#101828] flex justify-between relative">
      <div className="flex  gap-2">
        <img className='h-28 m-2 rounded-2xl ' src={productData.image[0]} alt="" />
      <div className="">
        <p className='text-white text-sm font-bold pt-4'>{productData.name}</p>
        <p className='text-sm text-gray-400 pt-1'>${productData.price}</p>
        <p className='text-gray-400 text-sm pt-1 '><span>Size: </span>{i.size}</p>
        <p className='text-gray-400 text-sm pt-1'><span>Quantity: </span>{i.quantity}</p>
    </div>
      </div>
      <div className="p-12 ">
        <button onClick={()=>decreaseQty(i._id, i.size)}  className='px-4 text-white text-2xl cursor-pointer'>-</button>
       <button onClick={()=>increaseQty(i._id, i.size)} className='px-4 text-white text-2xl cursor-pointer'>+</button>
      </div>
 </div>
 
</>
) : (<p key={ind}>Product not found</p>);
})}

{/* Cart Total Section */}
     {
      newData.length > 0 && (
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

</div>
)
} 

export default Cart