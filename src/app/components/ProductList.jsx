"use client";
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { setProducts } from '../redux/productSlice';
import axios from 'axios';
import OrderForm from '../order/page';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  console.log(selectedProducts)
  useEffect(() => {
    axios.get('https://admin.refabry.com/api/all/product/get')
      .then((response) => {
        console.log(response)
        dispatch(setProducts(response.data.data.data));  // Dispatch the action with fetched data
      })
      .catch((error) => console.log(error));  // Log errors if any
  }, [dispatch]);

  // Show a loading message if products are not available or the array is empty
  if (!products || products.length === 0) return <p className="p-8">Loading products...</p>;


  
  const handleSelect = (product) => {
    
    setSelectedProducts(prev => [...prev, { id: product.id, quantity: 1 }]);
  };
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={handleSelect} />
        ))}
      </div>


{selectedProducts.length > 0 && (
        <div className="mt-10">
          <OrderForm selectedProducts={selectedProducts} />
        </div>
         )}
    </div>
  );
};

export default ProductList;