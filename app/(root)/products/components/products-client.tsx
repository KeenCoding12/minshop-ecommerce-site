"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart-store";
import toast from "react-hot-toast";

type SortOrder = "default" | "price-asc" | "price-desc";

interface Props {
  products: Product[];
}

function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  function handleClick() {
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  }

  return (
    <button
      onClick={handleClick}
      className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold py-2.5 px-4 rounded transition-colors cursor-pointer"
    >
      Add to cart
    </button>
  );
}

export default function ProductsClient({ products }: Props) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const sorted = [...products].sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="py-10">
      <div className="container">
        {/* Sort bar */}
        <div className="relative flex justify-end mb-8">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className="appearance-none border border-gray-300 text-neutral-700 text-sm rounded px-4 py-2 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            <option value="default">Default sorting</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          {/* Chevron */}
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((product) => (
            <div
              key={product.id}
              className="flex flex-col border border-neutral-100 rounded-sm overflow-hidden bg-white"
            >
              {/* Image */}
              <Link href={`/products/${product.id}`}>
                <div className="bg-gray-100 flex items-center justify-center h-56 p-4 hover:opacity-90 transition-opacity">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={180}
                    height={180}
                    className="object-contain h-full w-auto"
                  />
                </div>
              </Link>

              {/* content */}
              <div className="p-4 flex flex-col gap-1 flex-1">
                <Link
                  href={`/products/${product.id}`}
                  className="font-bold text-neutral-900 hover:text-sky-600 transition-colors "
                >
                  {product.name}
                </Link>
                <p className="text-neutral-700">${product.price.toFixed(2)}</p>
                <p className="font-bold text-neutral-900">{product.category}</p>
                <div className="mt-auto">
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
