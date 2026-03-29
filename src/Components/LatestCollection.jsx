import React, { useState } from 'react'
import Title from './Title'
import { products } from '../assets/frontend_assets/assets'
import ProductItem from './ProductItem'

function LatestCollection() {
const [lProduct, setlProduct] = useState(products)
  return (
    <div className='h-150 w-full bg-black'>
       <div className="">
   <Title 
   t1="Trending"
   t2=" Collection"
   p1="Step into a world where elegance meets innovation—our luxury e-commerce experience is crafted for those who appreciate the finer things. Every detail, from curated collections to seamless navigation, reflects sophistication and exclusivity. We bring you premium products that embody quality, style, and timeless design, delivered with precision and care. This is more than shopping—it’s a refined journey where luxury is not just seen, but felt."
   />
</div>
    
    <div className="flex flex-wrap gap-8 justify-center">
        {
            lProduct.slice(0,4).map((obj,ind)=>
            <ProductItem  
            key={ind}
            id={obj.id}
            name={obj.name}
            image={obj.image}
            price={obj.price}
            />
            )}
    </div>
    </div>
  )
}

export default LatestCollection