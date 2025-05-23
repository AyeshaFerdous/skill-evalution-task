"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder, resetOrder } from "../redux/orderSlice";
import toast from "react-hot-toast";
import Image from "next/image";

export default function OrderForm({ selectedProducts }) {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.order);

  const [formData, setFormData] = useState({
    c_name: "",
    c_phone: "",
    address: "",
    courier: "steadfast",
    advance: null,
    discount_amount: null,
    delivery_charge: "80",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!selectedProducts ) {
      toast.error("Please select products before placing an order!");
      return;
    }
  
    const product_ids = selectedProducts.map(p => p.id).join(",");
    const s_product_qty = selectedProducts.map(p => p.quantity).join(",");
  
    const finalOrder = {
      product_ids,
      s_product_qty,
      ...formData,
      cod_amount: "1250" 
    };
  
    dispatch(placeOrder(finalOrder))
    .unwrap()
    .then((res) => {
      toast.success("Order placed successfully!");
    })
    .catch((err) => {
      toast.error("Failed to place order!");
    });
  };
  return (
    <div className="w-11/12 mx-auto py-6 flex flex-col lg:flex-row items-center justify-center">
      <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="c_name"
          placeholder="Your Name"
          value={formData.c_name}
          onChange={handleChange}
          className="w-full border border-gray-400 p-2 rounded outline-none"
          required
        />
        <input
          type="text"
          name="c_phone"
          placeholder="Phone Number"
          value={formData.c_phone}
          onChange={handleChange}
          className="w-full border border-gray-400 p-2 rounded outline-none"
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-400 p-2 rounded outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-800 text-white py-2 rounded hover:bg-red-700"
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>

        
      </form>
    </div>
    <div>
        <Image src={'/order.jpg'} alt="place your order" width={400} height={400}></Image>
    </div>
    </div>
   
  );
}
