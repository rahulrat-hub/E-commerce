import React from 'react'
import Title from './Title'
import { products } from '../assets/frontend_assets/assets'
import ProductItem from './ProductItem'

function LatestCollection() {

  return (
    <section className="bg-linear-to-b from-black via-gray-900 to-black text-gray-200 py-16 px-6">

      {/* Title Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <Title 
          t1="Trending"
          t2=" Collection"
          p1="Step into a world where elegance meets innovation—our luxury e-commerce experience is crafted for those who appreciate the finer things."
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {
          products.slice(0,4).map((obj, ind) => (
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

export default LatestCollection
