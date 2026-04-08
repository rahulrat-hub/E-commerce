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
     <div key={ind} className="">
            <img src={productData.image[0]} alt="" />
            <p>{productData.name}</p>
            <p>{productData.price}</p>
            <p>{i.size}</p>
            <p>{i.quantity}</p>
            </div>
    ) : (<p key={ind}>Product not found</p>)
  })

  )
}

export default Cart