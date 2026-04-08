import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/frontend_assets/assets'
import ProductItem from './ProductItem'

function BestSeller() {

  const [bestSeller1, setbestSeller1] = useState([])

  useEffect(() => {
    const best = products.filter((i) => i.bestseller === true)
    setbestSeller1(best)
  }, [])

  return (
    <section className="bg-linear-to-b from-black via-gray-900 to-black text-gray-200 py-16 px-6">

      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <Title 
          t1="Best"
          t2=" Seller"
          p1="Our Best Sellers collection is where style meets trust. These are the products our customers love the most—chosen for their quality, design, and everyday value."
        />
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {
          bestSeller1.slice(0,4).map((obj, ind) => (
            <div
              key={ind}
              className="bg-gray-900 border border-gray-800 rounded-xl p-2 hover:border-blue-500 transition duration-300"
            >
              <ProductItem 
                id={obj.id}
                name={obj.name}
                image={obj.image}
                price={obj.price}
              />
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default BestSeller
