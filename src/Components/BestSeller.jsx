import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/frontend_assets/assets'
import ProductItem from './ProductItem'

function BestSeller() {
  const [bestSeller1, setbestSeller1] = useState(false)
const best = () => {
let b = products.filter((i)=> i.bestseller === true )
setbestSeller1(b);
}
useEffect(()=>{
  best();
}, []);

  return (
    <div>
      <div className="bg-black h-150 ">
        <Title 
        t1="Best"
        t2=" Seller"
        p1="Our Best Sellers collection is where style meets trust. These are the products our customers love the most—chosen for their quality, design, and everyday value. Each item in this section has earned its place through real demand and positive experiences, making it easier for you to shop with confidence. Whether you're looking for timeless essentials or trending favorites, our best sellers represent the perfect balance of popularity and performance. Discover what everyone is choosing—and why you should too."
        />

<div className="flex flex-wrap gap-8 justify-center">
{
  bestSeller1 && bestSeller1.slice(0,4).map((obj,ind)=>
  <ProductItem 
  key={ind}
  id={obj.id}
  name={obj.name}
  image={obj.image}
  price={obj.price}
  />
  )
}
</div>
</div>
    </div>
  )
}

export default BestSeller