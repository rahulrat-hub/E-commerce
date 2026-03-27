import React from 'react'
import { assets, products } from '../assets/frontend_assets/assets'
import ProductItem from '../Components/ProductItem'
import SearchIcon from '@mui/icons-material/Search';
 

function Collection() {
  return (
  <div className="">

{/* {heading - Start} */}
<div className="text-center text-2xl uppercase mt-2 font-bold underline decoration-amber-600 underline-offset-2 p-2.5">
  <h1>Collection</h1>
</div>
{/* {End} */}

{/* {Search & Sort Container - Start} */}
<div className="flex justify-around items-center ml-74.25 mt-5">

{/* {searchbar} */}
<div className="h-11 w-175">
  <input className='h-full w-full border-2 rounded-2xl p-2' type="text" placeholder='Search.....' />
</div>

{/* {Sort} */}
<div>
<select className='border-2 rounded-2xl p-1'>
 <option value="">Sort</option>
  <option value="">Low</option>
  <option value="">High</option>
</select>
</div>

</div>
{/* {End} */}

{/* {Checkbox & Product Div -Start} */}

<div className="h-screen w-full mt-2 flex">

<div className="left h-100 rounded-2xl w-75 border-2 ml-2 ">
<h1></h1>
</div>





<div className="right h-full w-[90%] border ml-2 "> </div>



</div>
































  </div>
  )
}

export default Collection