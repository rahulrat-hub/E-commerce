import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { products } from '../assets/frontend_assets/assets';


function Cart() {
 const {cartItem} =  useContext(ProductContext)
const [newData, setnewData] = useState([])

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
  FormateData()
}, [cartItem])
 
  return (
  newData.map((i,ind)=>{
    let productData = products.find(obj=>obj._id === i._id);

    return productData ? (  
      // {container}
  
      <div className="h-32 m-10 border rounded-2xl bg-[#101828] flex justify-between">
      <div className="flex  gap-2">
        <img className='h-28 m-2 rounded-2xl ' src={productData.image[0]} alt="" />
      <div className="">
        <p className='text-white text-sm font-bold pt-4'>{productData.name}</p>
        <p className='text-sm text-gray-400 pt-1'>${productData.price}</p>
        <p className='text-gray-400 text-sm pt-1 '><span>Size: </span>{i.size}</p>
        <p className='text-gray-400 text-sm pt-1'><span>Quantity: </span>{i.quantity}</p>
    </div>
      </div>
      <div className="  mr-10 p-12 ">
        <p className=' text-gray-400 hover:text-white border rounded-[10px] tracking-wide font-semibold p-2 text-sm cursor-pointer'>DELETE</p>
      </div>
    </div>

   
           
    ) : (<p key={ind}>Product not found</p>)
  })

  )
}

export default Cart