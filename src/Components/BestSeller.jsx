import React, { useEffect, useState } from 'react'
import { products } from '../assets/frontend_assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
    const [bestSeller1, setBestSeller] = useState(false);
    const best = () => {
        let b = products.filter((i)=> i.bestseller == true );
        setBestSeller(b);
    };
    useEffect(()=>{
        best();
    },[]) 
  return (
    <div className='h-150 w-full'>
<div className="mt-3 h-41">
    <Title
    t1="Best "
    t2="Seller"
    p2={
        <p className='ml-17 mr-17 text-[13px] pt-3 uppercase'>
            Our best-selling item stands out as a customer favorite thanks to its perfect blend of quality, style, and value. Designed to meet everyday needs while adding a touch of elegance, this product has consistently received outstanding reviews for its durability and performance. Whether you're upgrading your essentials or looking for something reliable and trendy, this top-rated choice delivers on all fronts. Loved by thousands of happy customers, it represents the ideal combination of functionality and modern design, making it a must-have in any e-commerce collection.
        </p>
    } />
</div>

<div className="flex gap-2 justify-center">
    {
      bestSeller1 && bestSeller1.slice(0,8).map((obj , ind)=>(
          <ProductItem  
          key={ind}
          image={obj.image}
          id={obj.id}
          price={obj.price}
          name={obj.name}
/>
    )
    )
    }
</div>
</div>
  )
}

export default BestSeller