import React, { useEffect, useState } from 'react'
import { assets, products } from '../assets/frontend_assets/assets'
import ProductItem from '../Components/ProductItem'
import SearchIcon from '@mui/icons-material/Search';
 

 

function Collection() {
  const [data, setdata] = useState(products);
  const [category,setCategory] = useState([]);

  const toggleCategory = (event) => {
let c = event.target.value;
setCategory((i)=>i.includes(c)?i.filter(o =>o != c) :[...i,c])
  };
 useEffect(()=>{
let updateproducts = products;
if(category.length){
 updateproducts = updateproducts.filter((i)=>category.includes(i.category))
 setdata(updateproducts)
}
}, [category])

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
  <option className='text-black'  value="low">Low</option>
  <option className='text-black' value="high">High</option>
</select>
</div>

</div>
{/* {End} */}

{/* {Checkbox & Product Div -Start} */}

<div className=" my-12 mx-12 flex gap-10 text-white relative">

{/* {CHECKED BOX} */}
<div className="bg-transparent border rounded-2xl h-90 w-75 fixed top-60 left-0 ">

{/* {HEADING} */}
<h4 className='uppercase text-center py-2 text-[18px] font-semibold tracking-wide'>Category</h4>

{/* {CATEGORY} */}
<div className="category flex flex-col gap-3 text-sm p-4">
 <label className='flex justify-between items-center cursor-pointer group'>
<span className='text-gray-400 group-hover:text-white transition'>MEN</span>
<input onChange={toggleCategory} className='w-4 h-4 cursor-pointer accent-white' type="checkbox" value="Men" />
  </label>

  <label className='flex justify-between items-center cursor-pointer group'>
<span className='text-gray-400 group-hover:text-white transition'>WOMEN</span>
<input onChange={toggleCategory}  className='w-4 h-4 cursor-pointer accent-white' type="checkbox" value="Women" />
  </label>


  <label className='flex justify-between items-center cursor-pointer group'>
<span className='text-gray-400 group-hover:text-white transition'>KIDS</span>
<input onChange={toggleCategory} className='w-4 h-4 cursor-pointer accent-white' type="checkbox" value="Kids" />
  </label>

</div>

{/* {DIVIDER} */}
<div className="h-px bg-[#2A2A2A] my-2" />

{/* {HEADING} */}
<h4 className='uppercase text-center py-2 text-[18px] font-semibold tracking-wide'>Sub-Category</h4>

{/* {SUB-CATEGORY} */}
<div className="flex flex-col gap-3 text-sm p-4">

<label className='flex justify-between items-center cursor-pointer group'>
<span className='text-gray-400 group-hover:text-white transition'>TOP-WEAR</span>
<input className='w-4 h-4 cursor-pointer accent-white' type="checkbox" />
</label>

<label className='flex justify-between items-center cursor-pointer group'>
<span className='text-gray-400 group-hover:text-white transition'>BOTTOM-WEAR</span>
<input className='w-4 h-4 cursor-pointer accent-white' type="checkbox" />
</label>


<label className='flex justify-between items-center cursor-pointer group'>
<span className='text-gray-400 group-hover:text-white transition'>WINTER-WEAR</span>
<input className='w-4 h-4 cursor-pointer accent-white' type="checkbox" />
</label>

</div>
</div>

{/* {PRODUCTS} */}
<div className="right h-full w-[90%] flex flex-wrap gap-1 ml-75 text-black">
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