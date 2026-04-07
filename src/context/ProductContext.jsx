import { createContext, useState, useEffect } from "react";

// create
export let ProductContext = createContext();

// Provider

function ProductProvider({children}) {
  const [cartItem, setcartItem] = useState({});
   
  
  // add to Bag function
  const addToBag = (id, size) => {
    if (!size) {
      return alert("Select Size First");
    }
   
   let cartData = structuredClone(cartItem);
    
    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    }
      else{
        cartData[id] = {}
        cartData[id][size] = 1;
      }
      setcartItem(cartData)
    }

   useEffect(()=>{
      console.log(cartItem)
    },[cartItem]);

      const obj ={
      cartItem,
      setcartItem,
      addToBag
    };
    
    return(
    <ProductContext.Provider value={obj}>
{children}
</ProductContext.Provider>
)
}

export default ProductProvider