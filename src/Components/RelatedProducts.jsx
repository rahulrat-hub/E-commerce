import React, { useEffect, useState } from 'react'
import { products } from '../assets/frontend_assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';

function RelatedProducts({category, subcategory}) {
    const [relproduct, setrelproduct] = useState([]);

    useEffect(()=>{
      let relatedproducts = products.slice()
     relatedproducts = relatedproducts.filter((i)=>i.category === category);
  if(subcategory)
     {relatedproducts = relatedproducts.filter((i)=>i.subCategory === subcategory)}

      setrelproduct(relatedproducts);
    },[products, category, subcategory]);

return (
    <div>
<Title 
t1={"Related"}
t2={"Products"}
/>

{relproduct.length ? (
  <div className=" text-white flex gap-8 justify-center pb-4">
    {
  relproduct.slice(0,4).map((obj,ind)=>
  <ProductItem 
  key={ind}
  id={obj._id}
  image={obj.image[0]}
  price={obj.price}
  name={obj.name}
   />)}
  </div>
) : (<p>No Products Found</p>)}


    </div>
  )
}

export default RelatedProducts