import react, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/frontend_assets/assets';

function Product(){
    let {pid} = useParams();
    const [Findproduct, setFindProduct] = useState(false);
    const [image, setImage] = useState(null);
   const fetchProduct = () =>{
   let p = products.find((i)=>i._id==pid)
   if(p) {
    setFindProduct(p);
setImage(p.image[0]);
   }
};
   useEffect(()=>{
    fetchProduct
   },[pid]);
   

    return(
    <div className="min-h-[85vh] px-[7vw]">
      {Findproduct ? (
        <div className="flex">
          <div className="">
            <div className="flex gap-2">
              <div className="left">
                {
                    Findproduct.image.map((obj,index)=>(
                        <img onClick={()=>setImage(obj)} className="w-20 mb-2" src={obj} />
                    ))
                }
              </div>
              <div className="right">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <h1>{Findproduct.name}</h1>
            <h1>{Findproduct.description}</h1>
            <h1>${Findproduct.price}</h1>
            {Findproduct.sizes.map((obj, index) => (
              <button className="p-2 cursor-pointer">{obj}</button>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-4xl">Loading...</h1>
      )}
    </div>
  );
    
}

export default Product