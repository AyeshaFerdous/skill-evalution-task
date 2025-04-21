"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const { id } = useParams();
  const { products: items } = useSelector((state) => state.products);
  
  const product = items.find((p) => p.id === Number(id));

  if (!product) return <p className="p-8">Loading product details...</p>;

  // Extract information
  const fabricMatch = product.short_desc?.match(/Fabric:\s*([^\n]+)/i);
  const swingMatch = product.short_desc?.match(/Swing:\s*([^\n]+)/i);
  const zipperMatch = product.short_desc?.match(/Zipper:\s*([^\n]+)/i);
  const paddingMatch = product.short_desc?.match(/Padding:\s*([^\n]+)/i);
  const sizeMatches = product.short_desc?.match(/\*\s*(.+?)(?=(\*|Visit|$))/gs);
  const addressMatch = product.short_desc?.match(/Visit us at:\s*([^\n]+)/i);
  const contactMatch = product.short_desc?.match(/Call\s*:\s*(.+?)\s*WhatsApp/i);
  console.log(fabricMatch, swingMatch, zipperMatch, paddingMatch, addressMatch)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-96">
          <Image
            src={`https://admin.refabry.com/storage/product/${product.image}`}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="p-8 space-y-8">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

          {/* Key Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fabricMatch && (
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Fabric</h2>
                <p className="text-gray-600">{fabricMatch[1]}</p>
              </div>
            )}
            {swingMatch && (
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Swing</h2>
                <p className="text-gray-600">{swingMatch[1]}</p>
              </div>
            )}
            {zipperMatch && (
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Zipper</h2>
                <p className="text-gray-600">{zipperMatch[1]}</p>
              </div>
            )}
            {paddingMatch && (
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Padding</h2>
                <p className="text-gray-600">{paddingMatch[1]}</p>
              </div>
            )}
          </div>

          {/* Sizes */}
          {sizeMatches && (
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Available Sizes</h2>
              <ul className="space-y-2 list-disc list-inside text-gray-600">
                {sizeMatches.map((size, idx) => (
                  <li key={idx}>{size.replace("*", "").trim()}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Address */}
          {addressMatch && (
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Visit Us</h2>
              <p className="text-gray-600">{addressMatch[1]}</p>
            </div>
          )}

          {/* Contact */}
          {contactMatch && (
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Contact</h2>
              <p className="text-gray-600">{contactMatch[1]}</p>
            </div>
          )}

          {/* Price + Button */}
          <div className="flex items-center justify-between pt-8 border-t">
            <p className="text-3xl font-bold text-green-600">${product.price}</p> {/* Example price */}
            <button className="px-8 py-3 bg-red-800 text-white rounded-full hover:bg-red-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
