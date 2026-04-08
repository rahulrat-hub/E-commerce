import React, { useEffect, useState } from 'react'
import { products } from '../assets/frontend_assets/assets'
import ProductItem from '../Components/ProductItem'
import SearchIcon from '@mui/icons-material/Search';

function Collection() {
  const [data, setdata] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortPrice, setsortPrice] = useState("")
  const [searchbar, setSearchbar] = useState("")

  const searchQuery = (event) => {
    setSearchbar(event.target.value.toUpperCase());
  }

  const sorting = (event) => {
    setsortPrice(event.target.value);
  }

  const toggleCategory = (event) => {
    let c = event.target.value;
    setCategory((i) =>
      i.includes(c) ? i.filter((o) => o !== c) : [...i, c]
    );
  };

  const toggleSubCategory = (event) => {
    let c = event.target.value;
    setsubCategory((i) =>
      i.includes(c) ? i.filter((o) => o !== c) : [...i, c]
    );
  };

  useEffect(() => {
    let updateProducts = [...products];

    if (category.length) {
      updateProducts = updateProducts.filter((i) =>
        category.includes(i.category)
      );
    }

    if (subCategory.length) {
      updateProducts = updateProducts.filter((i) =>
        subCategory.includes(i.subCategory)
      );
    }

    if (sortPrice === "low") {
      updateProducts.sort((a, b) => a.price - b.price);
    }

    if (sortPrice === "high") {
      updateProducts.sort((a, b) => b.price - a.price);
    }

    if (searchbar) {
      updateProducts = updateProducts.filter((i) =>
        i.name.toUpperCase().includes(searchbar)
      );
    }

    setdata(updateProducts);
  }, [category, subCategory, sortPrice, searchbar]);

  return (
    <div className="bg-black min-h-screen text-white px-6">

      {/* Heading */}
      <h1 className="text-3xl text-center font-bold pt-6 underline underline-offset-4 decoration-gray-600">
        Collection
      </h1>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">

        {/* Search */}
        <div className="relative w-full md:w-2/3">
          <input
            onChange={searchQuery}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 pr-10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search products..."
          />
          <SearchIcon className="absolute right-3 top-3 text-gray-400" />
        </div>

        {/* Sort */}
        <select
          onChange={sorting}
          className="bg-gray-900 border border-gray-700 rounded-xl p-3 cursor-pointer text-gray-300 focus:outline-none"
        >
          <option value="">Sort</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8 mt-10">

        {/* Sidebar Filters */}
        <div className="md:w-1/4 fixed top-60 left-2 bg-gray-900 border border-gray-800 rounded-xl p-5 h-fit">

          <h4 className="text-lg font-semibold mb-4">Category</h4>
          <div className="flex flex-col gap-3 text-gray-400">
            {["Men", "Women", "Kids"].map((item) => (
              <label key={item} className="flex justify-between cursor-pointer">
                <span>{item}</span>
                <input onChange={toggleCategory} type="checkbox" value={item} />
              </label>
            ))}
          </div>

          <div className="h-px bg-gray-800 my-5" />

          <h4 className="text-lg font-semibold mb-4">Sub-Category</h4>
          <div className="flex flex-col gap-3 text-gray-400">
            {["Topwear", "Bottomwear", "Winterwear"].map((item) => (
              <label key={item} className="flex justify-between cursor-pointer">
                <span>{item}</span>
                <input onChange={toggleSubCategory} type="checkbox" value={item} />
              </label>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-wrap ml-80 ">
          {data.length > 0 ? (
            data.map((obj, index) => (
              <ProductItem
                key={index}
                id={obj._id}
                image={obj.image[0]}
                name={obj.name}
                price={obj.price}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;