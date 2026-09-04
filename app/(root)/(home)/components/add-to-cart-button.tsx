"use client";

import { useCartStore } from "@/store/cart-store";
import { Product } from "@/lib/types";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
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
