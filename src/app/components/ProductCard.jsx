import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, onSelect }) => {

 
  return (
    <div className="group relative border border-primary/20 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden bg-white">
      
      {/* Optimized Next.js Image */}
      <div className="relative w-full h-52">
        <Image
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          fill
          className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

        <div className="flex gap-4 mt-4">
          <Link
            href={`/product/${product.id}`}
            className="text-primary font-medium text-sm hover:underline transition"
          >
            View Details
          </Link>

          <button
            onClick={() => onSelect(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm transition"
          >
            Select
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
