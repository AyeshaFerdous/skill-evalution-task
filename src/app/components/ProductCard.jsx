import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
const ProductCard = ({ product, onSelect }) => {

 
  return (
    <div className="w-11/12 mx-auto">
      <div className="group relative  rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 overflow-hidden bg-white">
      
      {/* Product Image */}
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
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition">
          {product.name}
        </h2>

        <div className="flex gap-4 mt-4">
          {/* View Details Button */}
          <Link
            href={`/product/${product.id}`}
            className="bg-red-800 hover:bg-red-700 text-white p-3 rounded-full transition"
          >
            <FaRegEye/>
          </Link>

          {/* Select Button */}
          <button
            onClick={() => onSelect(product)}
            className="bg-white hover:bg-red-800 border border-red-800 text-red-800 hover:text-white p-3 rounded-full transition"
          >
            <FaCartArrowDown />
          </button>
        </div>
      </div>

    </div>
    </div>
  );
};

export default ProductCard;
