import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen">
    <h1 className="text-center text-3xl font-bold py-6">Our Products</h1>
    <ProductList />
  </div>
  );
}
