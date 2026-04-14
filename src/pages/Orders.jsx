import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "./CartTotal";

function Orders() {
  return (
    <div className="text-white m-4 ">
      <h2 className="text-2xl font-bold text-center m-6">Address & Payment</h2>

      <div className="flex gap-20">
        <div className="left w-125 p-3 bg-linear-to-r from-[#0f172a] to-[#1e293b] rounded-2xl">
        <h4 className="text-xl font-semibold p-4">Shipping Address</h4>
        <form className="space-y-4">
           <div className="flex gap-2">
             <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />

             <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />
           </div>
            
            <input
              type="text"
              placeholder="E-mail"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />

             <input
              type="text"
              placeholder="Street"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />

             <div className="flex gap-2">
             <input
              type="text"
              placeholder="State"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />
           </div>


           <div className="flex gap-2">
             <input
              type="text"
              placeholder="Pincode"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />
           </div>
           
            <input
              type="text"
              placeholder="Phone-Number"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
            />
          </form>
      </div>

     <div className="flex flex-col mt-10">
       <div className="right flex gap-6 h-10.5">
        <div className=" flex gap-1 border  h-10 p-2 rounded-[5px]">
          <p className="h-3 w-3 border rounded-2xl mt-1.5"></p>
          <img src={assets.razorpay_logo} alt="" className="h-6"/>
        </div>
        <div className="flex gap-1 border  h-10 p-2 rounded-[5px]">
          <p className="h-3 w-3 border rounded-2xl mt-1.5"></p>
          <img src={assets.stripe_logo} alt="" className="h-6"/>
        </div>
        <div className="flex gap-1 border h-10 p-2 rounded-[5px]">
          <p className="h-3 w-3 border rounded-2xl mt-1.5"></p>
          <p>Cash on Delivery</p>
        </div>
       </div>
     <div className="mt-10">
      <CartTotal />
     </div>
     </div>
      </div>
    </div>
  );
}

export default Orders;
