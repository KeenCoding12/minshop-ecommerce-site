"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartStore, CartItem } from "@/types";

function calcTotals(items: CartItem[]) {
  return {
    totalItems: items.reduce((sum, i) => sum + i.qty, 0),
    totalPrice: items.reduce((sum, i) => sum + i.product.price * i.qty, 0),
  };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (product, qty) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          const updated = existing
            ? state.items.map((i) =>
                i.product.id === product.id ? { ...i, qty: i.qty + qty } : i,
              )
            : [...state.items, { product, qty }];
          return { items: updated, ...calcTotals(updated) };
        }),

      removeItem: (id) =>
        set((state) => {
          const updated = state.items.filter((i) => i.product.id !== id);
          return { items: updated, ...calcTotals(updated) };
        }),

      updateQty: (id, qty) =>
        set((state) => {
          const updated =
            qty <= 0
              ? state.items.filter((i) => i.product.id !== id)
              : state.items.map((i) =>
                  i.product.id === id ? { ...i, qty } : i,
                );
          return { items: updated, ...calcTotals(updated) };
        }),

      clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
    }),
    {
      name: "minshop-cart",
    },
  ),
);
