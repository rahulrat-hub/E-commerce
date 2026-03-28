import React, { useState } from 'react'
import { assets, products } from '../assets/frontend_assets/assets'
import ProductItem from '../Components/ProductItem'
import SearchIcon from '@mui/icons-material/Search';

 

function Collection() {
  const [data, setdata] = useState(products)
  return (
  <div className="">

{/* {heading - Start} */}
<div className="text-center text-2xl uppercase mt-2 font-bold underline decoration-amber-600 underline-offset-2 p-2.5">
  <h1>Collection</h1>
</div>
{/* {End} */}

{/* {Search & Sort Container - Start} */}
<div className="flex justify-around items-center ml-74.25 mt-5 ">

{/* {searchbar} */}
<div className="h-11 w-175 relative">
  <input className='h-full w-full border-2 rounded-2xl p-2' type="text" placeholder='Search.....' />
<div className="absolute top-2.25 right-1.5 cursor-pointer">
    <SearchIcon />
</div>
</div>

{/* {Sort} */}
<div>
<select className='border-2 rounded-2xl p-1 cursor-pointer'>
 <option value="">Sort</option>
  <option value="">Low</option>
  <option value="">High</option>
</select>
</div>

</div>
{/* {End} */}

{/* {Checkbox & Product Div -Start} */}

<div className="h-screen w-full mt-2 flex">

<div className="left h-70 rounded-2xl w-60 border-2 ml-2 ">
<h1 className='text-center font-bold text-2xl bg-amber-600 rounded-t-[14px]'>Category</h1>
<div className="flex flex-col text-[18px] font-semibold p-4">
<label >
  Men<input className='m-1' type="checkbox" />
</label>

<label >
  Women<input className='m-1' type="checkbox" />
</label>

<label >
  Kids<input className='m-1' type="checkbox" />
</label>
</div>
 
 
  <h1 className='text-center font-bold text-2xl bg-amber-600 '>Sub-Category</h1>
 <div className="flex flex-col text-[18px] font-semibold p-4">
 <label >
  Top-Wear<input className='m-1' type="checkbox" />
</label>

<label >
  Bottom-Wear<input className='m-1' type="checkbox" />
</label>


<label >
  Winter-Wear<input className='m-1' type="checkbox" />
</label>
 </div>
 </div>


<div className="right h-full w-[90%] flex flex-wrap gap-1 ml-2 ">
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