import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/frontend_assets/assets'
import RelatedProducts from '../Components/RelatedProducts'
import { ProductContext } from '../context/ProductContext'

function SingleProduct() {
  const { pid } = useParams()
  const [findProduct, setFindProduct] = useState(null)
  const [image, setImage] = useState(null)
  const [size, setSize] = useState("")
  const [zoomStyle, setZoomStyle] = useState({})
  const { addToBag } = useContext(ProductContext)

  // Fetch product
  const fetchProduct = () => {
    const d = products.find((obj) => obj._id === pid)
    if (d) {
      setFindProduct(d)
      setImage(d.image[0])
    }
  }

  // Mouse move zoom
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)"
    })
  }

  const resetZoom = () => {
    setZoomStyle({ transform: "scale(1.2)" })
  }

  useEffect(() => {
    fetchProduct()
  }, [pid])

  if (!findProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        404 - Product Not Found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-10">
      
      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {findProduct.image.map((img, ind) => (
              <img
                key={ind}
                onClick={() => setImage(img)}
                src={img}
                alt={findProduct.name}
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer hover:border-blue-500 border border-gray-700 transition"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-800">
            <img
              src={image}
              alt={findProduct.name}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetZoom}
              style={zoomStyle}
              className="w-72 md:w-96 h-72 md:h-96 object-cover transition-transform duration-300 ease-out"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold">{findProduct.name}</h1>
          <p className="text-gray-400">{findProduct.description}</p>
          <p className="text-2xl md:text-3xl font-bold">${findProduct.price}</p>

          {/* Sizes */}
          <div className="flex gap-4 flex-wrap">
            {findProduct.sizes.map((s, ind) => (
              <button
                key={ind}
                onClick={() => setSize(s)}
                className={`px-4 py-2 rounded-lg border ${
                  s === size ? "border-blue-500" : "border-gray-700"
                } hover:border-blue-400 transition`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToBag(findProduct._id, size)}
            className="w-48 md:w-64 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Related Products</h2>
        <RelatedProducts
          category={findProduct.category}
          subcategory={findProduct.subcategory}
        />
      </div>
    </div>
  )
}

export default SingleProduct
