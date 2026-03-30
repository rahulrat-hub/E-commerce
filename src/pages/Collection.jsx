import React, { useState } from 'react'
import { assets, products } from '../assets/frontend_assets/assets'
import ProductItem from '../Components/ProductItem'
import SearchIcon from '@mui/icons-material/Search';

 

function Collection() {
  const [data, setdata] = useState(products)
  
  return (
  <div className="bg-black ">

{/* {heading - Start} */}
<div className="text-center text-2xl uppercase pt-6 font-bold underline decoration-gray-400 underline-offset-2 p-2.5">
  <h1 className='text-white'>Collection</h1>
</div>
{/* {End} */}

{/* {Search & Sort Container - Start} */}
<div className="flex justify-around items-center ml-74.25 mb-5 mt-2 text-white  ">

{/* {searchbar} */}
<div className="h-11 w-175 relative">
  <input className='h-full w-full border rounded-2xl p-2' type="text" placeholder='Search.....' />
<div className="absolute top-2.25 right-1.5 cursor-pointer">
    <SearchIcon />
</div>
</div>

{/* {Sort} */}
<div>
<select className='border rounded-2xl p-1 cursor-pointer'>
 <option className='text-black' value="">Sort</option>
  <option className='text-black'  value="">Low</option>
  <option className='text-black' value="">High</option>
</select>
</div>

</div>
{/* {End} */}

{/* {Checkbox & Product Div -Start} */}

<div className=" my-12 mx-12 flex gap-10 text-white ">

{/* {CHECKED BOX} */}
<div className="bg-transparent border rounded-2xl h-90 w-75">

{/* {HEADING} */}
<h4 className='uppercase text-center py-2 text-[18px] font-semibold tracking-wide'>Category</h4>

{/* {CATEGORY} */}
<div className="category flex flex-col gap-3 text-sm p-4">
 {["MEN","WOMEN","KIDS"].map((item)=> <label key={item}
  className='flex justify-between items-center cursor-pointer group'>
<span className='text-gray-400 group-hover:text-white transition'>{item}</span>
<input className='w-4 h-4 cursor-pointer accent-white' type="checkbox" />
  </label>
 )}
</div>

{/* {DIVIDER} */}
<div className="h-px bg-[#2A2A2A] my-2" />

{/* {HEADING} */}
<h4 className='uppercase text-center py-2 text-[18px] font-semibold tracking-wide'>Sub-Category</h4>

{/* {SUB-CATEGORY} */}
<div className="flex flex-col gap-3 text-sm p-4">
{["TOP-WEAR","BOTTOM-WEAR","WINTER-WEAR"].map((item)=>
<label  key={item}
className='flex justify-between items-center cursor-pointer group'>
<span className='text-gray-400 group-hover:text-white transition'>{item}</span>
<input className='w-4 h-4 cursor-pointer accent-white' type="checkbox" />
</label>
)}
</div>
</div>

{/* {PRODUCTS} */}
<div className="right h-full w-[90%] flex flex-wrap gap-1 ml-2 text-black">
  {
  data.map((obj,index)=>
  <ProductItem 
  key={index}
  id={obj.id}
  image={obj.image}
  name={obj.name}
  price={obj.price}
  />
)
} </div>
</div>
  </div>
  )
}

export default Collection