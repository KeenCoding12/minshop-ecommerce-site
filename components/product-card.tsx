import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import AddToCartButton from "./add-to-cart-button";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col border border-gray-100 rounded-sm overflow-hidden bg-white">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="bg-gray-100 flex items-center justify-center h-52 p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={180}
            height={180}
            className="object-contain h-full w-auto"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <Link
          href={`/products/${product.id}`}
          className="font-bold text-gray-900 hover:text-blue-600 transition-colors"
        >
          {product.name}
        </Link>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
        <p className="font-bold text-gray-900">{product.category}</p>
        <div className="mt-3">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
