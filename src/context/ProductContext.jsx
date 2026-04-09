import { createContext, useState, useEffect } from "react";

// create
export let ProductContext = createContext();

// Provider
function ProductProvider({ children }) {

  const [cartItem, setcartItem] = useState({});

  function getTotalQuantity() {
    let total = 0;

    for (let id in cartItem) {
      for (let size in cartItem[id]) {
        total += cartItem[id][size];
      }
    }
    return total;
  }

  // ✅ ADD TO BAG
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
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }

    setcartItem(cartData);
  };

  // ✅ INCREASE
  const increaseQty = (id, size) => {
    let copy = structuredClone(cartItem);

    if (!copy[id]) copy[id] = {};
    if (!copy[id][size]) copy[id][size] = 0;

    copy[id][size] += 1;

    setcartItem(copy);
  };

  // ✅ DECREASE
  const decreaseQty = (id, size) => {
    let copy = structuredClone(cartItem);

    if (copy[id][size] > 1) {
      copy[id][size] -= 1;
    } else {
      delete copy[id][size];
    }

    if (Object.keys(copy[id]).length === 0) {
      delete copy[id];
    }

    setcartItem(copy);
  };

  useEffect(() => {
    // optional (localStorage)
  }, [cartItem]);

  const obj = {
    cartItem,
    addToBag,
    getTotalQuantity,
    increaseQty,
    decreaseQty,
  };

  return (
    <ProductContext.Provider value={obj}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
