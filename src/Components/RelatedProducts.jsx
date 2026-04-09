import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/frontend_assets/assets'
import ProductItem from './ProductItem'

function RelatedProducts({ category, subcategory }) {
  const [relProduct, setRelProduct] = useState([])

  useEffect(() => {
    let filtered = products.slice()
    filtered = filtered.filter((p) => p.category === category)
    if (subcategory) {
      filtered = filtered.filter((p) => p.subCategory === subcategory)
    }
    setRelProduct(filtered)
  }, [category, subcategory])

  return (
    <section className="bg-linear-to-b from-black via-gray-900 to-black text-gray-200 py-16 px-6">

      {/* Section Title */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <Title
          t1="Related"
          t2=" Products"
          p1="Explore products similar to what you're viewing — curated for quality, style, and popularity."
        />
      </div>

      {/* Products Grid */}
      {relProduct.length ? (
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relProduct.slice(0, 4).map((obj, ind) => (
            <div
              key={ind}
              className="bg-gray-900 border border-gray-800 rounded-xl p-0.5 hover:border-blue-500 transition duration-300"
            >
              <ProductItem
                id={obj._id}
                name={obj.name}
                image={obj.image}
                price={obj.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-6">No Products Found</p>
      )}
    </section>
  )
}

export default RelatedProducts
