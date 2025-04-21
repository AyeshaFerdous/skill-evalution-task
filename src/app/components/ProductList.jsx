"use client";
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import { setProducts } from '../redux/productSlice';
import axios from 'axios';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);  // Access the products array from Redux store

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />  // Map through the products and display each in a ProductCard
      ))}
    </div>
  );
};

export default ProductList;