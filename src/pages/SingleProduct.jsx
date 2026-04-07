import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/frontend_assets/assets';
import { scale, transform } from 'framer-motion';
import RelatedProducts from '../Components/RelatedProducts';
import { ProductContext } from '../context/ProductContext';


function SingleProduct() {
const {pid} = useParams();
const [findproduct, setfindProduct] = useState(null);
const [image, setImage] = useState(null);
const [size, setSize] = useState("");
const [zoomStyle, setzoomStyle] = useState({});
const {addToBag} = useContext(ProductContext);

const fetchProduct = () => {
 let d = products.find((obj) => obj._id == pid);
 if(d){
  setfindProduct(d);
  setImage(d.image[0]);
 }
 }

//  MOUSE MOVE ZOOM

const handleMouseMove = (e) =>{

const {left, top, width, height} = e.target.getBoundingClientRect();
const x = ((e.clientX - left) /width) * 100;
const y = ((e.clientY - top) /height) * 100;

setzoomStyle({
  transformOrigin: `${x}% ${y}%`,
  transform: "scale(2)"
})
};

const resetZoom = () => {
  setzoomStyle({
    transform: "scale(1.2)"
  })
}

useEffect(() => {
  fetchProduct()
},[pid]);

 return (
 
  <>
    {
      findproduct ? (
       <div className="min-h-screen bg-black">
         <div className=" text-white py-8 px-10 flex  gap-10">
          <div className="flex gap-5">
            <div className="left">
              {
                findproduct.image.map((obj, ind)=>
                 <img 
                key={ind}
                  onClick={()=>setImage(obj)}
                src={obj} alt="" 
                className='w-50 h-35 rounded-2xl'
                />
                )
              }
            </div>
<div className="right overflow-hidden">
  <img 
  onMouseMove={handleMouseMove}
  onMouseLeave={resetZoom}
  style={zoomStyle}
  src={image} alt="" 
  className='h-125 w-200 rounded-[10px] transition-all duration-300 ease-out' 
  />
</div>
</div>

{/* {CONTENT PAGE} */}

<div className="flex flex-col gap-10 p-2">
  <h1 className=' text-3xl font-semibold tracking-wide'>{findproduct.name}</h1>
  <p className='text-gray-400'>{findproduct.description}</p>
  <p className='text-2xl font-bold'>${findproduct.price}</p>



<div className="flex gap-7 text-2xl">
  {
    findproduct.sizes.map((obj,ind)=>
   <button
   key={ind}
   onClick={()=>setSize(obj)}
   className={`${obj === size ? "border border-red-500" : ""} cursor-pointer px-4 py-2`} >
    {obj}
</button> 
)
}
</div>

<button onClick={()=>addToBag(findproduct._id, size)}  className="h-10 bg-white text-black py-1 hover:bg-gray-300 transition cursor-pointer">
  Add to Cart
</button>
</div>
</div>

<div className="text-white">

<RelatedProducts 
 category = {findproduct.category}
 subcategory = {findproduct.subcategory}

/>


</div>
       </div>
      ) : (<h1>404 error</h1>)
    }
  </>
  )
}


export default SingleProduct