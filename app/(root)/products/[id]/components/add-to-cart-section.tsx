"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { useCartStore } from "@/store/cart-store";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

export default function AddToCartSection({ product }: Props) {
  const [qty, setQty] = useState(1);
  const addItem = useCartStore((s) => s.addItem);

  function decrement() {
    setQty((q) => Math.max(1, q - 1));
  }

  function increment() {
    setQty((q) => q + 1);
  }

  function handleAddToCart() {
    addItem(product, qty);
    toast.success(`${product.name} added to cart!`);
  }

  return (
    <div className="flex items-center gap-4 mt-2">
      {/* Qty controls */}
      <div className="flex items-center border border-gray-300 rounded overflow-hidden">
        <button
          onClick={decrement}
          aria-label="Decrease quantity"
          className="w-9 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg font-medium cursor-pointer"
        >
          −
        </button>
        <span className="w-10 h-10 flex items-center justify-center text-sm font-semibold text-gray-900 border-x border-gray-300">
          {qty}
        </span>
        <button
          onClick={increment}
          aria-label="Increase quantity"
          className="w-9 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg font-medium cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAddToCart}
        className="flex-1 bg-[#1a1a1a] hover:bg-gray-800 active:bg-black text-white text-sm font-semibold py-2.5 px-6 rounded transition-colors cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
}
