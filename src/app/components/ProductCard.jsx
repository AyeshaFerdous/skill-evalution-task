import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl shadow-md p-4">
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="h-48 w-full object-cover rounded-lg"
      />
      <h2 className="mt-4 font-semibold">{product.name}</h2>
      <Link href={`/product/${product.id}`} className="text-primary mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;