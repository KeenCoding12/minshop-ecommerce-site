"use client";

import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";

export default function CartClient() {
  const { items, totalPrice, removeItem, updateQty } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-5">
        <p className="text-neutral-500 text-lg">Your cart is empty.</p>
        <Link
          href="/products"
          className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold px-6 py-3 rounded transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="flex flex-col lg:flex-row gap-8 container">
        {/* ── Left: cart table ── */}
        <div className="flex-1">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center border-b border-neutral-100 pb-3 mb-2">
            <span className="font-bold text-neutral-700">Product</span>
            <span className="font-bold text-neutral-700 w-28 text-center">
              Quantity
            </span>
            <span className="font-bold text-neutral-700 w-24 text-right">
              Subtotal
            </span>
            <span className="w-8" />
          </div>

          {/* Cart rows */}
          <div className="divide-y divide-gray-100">
            {items.map(({ product, qty }) => (
              <div
                key={product.id}
                className="grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center py-5"
              >
                {/* Product image + name */}
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 rounded shrink-0 w-20 h-20 flex items-center justify-center p-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors leading-snug"
                  >
                    {product.name}
                  </Link>
                </div>

                {/* Qty controls */}
                <div className="flex items-center border border-gray-300 rounded overflow-hidden w-28">
                  <button
                    onClick={() => updateQty(product.id, qty - 1)}
                    aria-label="Decrease quantity"
                    className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-base font-medium cursor-pointer"
                  >
                    −
                  </button>
                  <span className="flex-1 h-9 flex items-center justify-center text-sm font-semibold text-gray-900 border-x border-gray-300">
                    {qty}
                  </span>
                  <button
                    onClick={() => updateQty(product.id, qty + 1)}
                    aria-label="Increase quantity"
                    className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-base font-medium cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Line subtotal */}
                <span className="text-sm font-semibold text-gray-900 w-24 text-right">
                  ${(product.price * qty).toFixed(2)}
                </span>

                {/* Remove button */}
                <button
                  onClick={() => removeItem(product.id)}
                  aria-label={`Remove ${product.name}`}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Coupon row */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-200">
            <input
              type="text"
              placeholder="Coupon code"
              className="border border-gray-300 text-sm text-gray-700 placeholder-gray-400 rounded px-4 py-2.5 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold px-5 py-2.5 rounded transition-colors cursor-pointer">
              Apply coupon
            </button>
          </div>
        </div>

        {/* ── Right: order summary ── */}
        <div className="lg:w-80 shrink-0">
          <div className="border border-gray-200 rounded p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-semibold text-gray-900">
                ${totalPrice}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Total</span>
              <span className="text-base font-bold text-gray-900">
                ${totalPrice}
              </span>
            </div>
            <button
              disabled
              className="mt-2 w-full bg-gray-200 text-gray-700 text-sm font-semibold py-3 px-4 rounded cursor-not-allowed"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
