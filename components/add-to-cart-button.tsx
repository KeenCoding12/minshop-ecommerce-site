"use client";

import { useCartStore } from "@/store/cart-store";
import { Product } from "@/types";
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
      className="w-full bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-sm font-semibold py-2.5 px-4 rounded transition-colors cursor-pointer"
    >
      Add to cart
    </button>
  );
}
