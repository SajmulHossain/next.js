import { IProduct } from "@/app/(commonLayout)/products/page";
import Image from "next/image";

type Props = {
  product: IProduct;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full h-56">
        <Image
          src={product.image}
          alt={product.product_name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.product_name}</h2>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-xs text-gray-400 mb-2">{product.category}</p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
