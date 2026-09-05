"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const totalItems = useCartStore((s) => s.totalItems);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-neutral-900 sticky top-0 right-0 py-4 z-50 w-full">
      <div className="container relative">
        {/* Main nav row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-tight"
          >
            MinShop
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-white font-semibold underline underline-offset-4"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Search toggle */}
            <button
              aria-label="Toggle search"
              onClick={() => setSearchOpen((v) => !v)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            {/* User icon */}
            <Link
              href="#"
              aria-label="Account"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <UserIcon className="w-5 h-5" />
            </Link>

            {/* Cart icon with badge */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative text-gray-300 hover:text-white transition-colors"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="px-4 py-8">
            <div className="max-w-xl ml-auto">
              <input
                type="text"
                placeholder="Search products..."
                autoFocus
                className="w-full bg-neutral-800 text-white placeholder-neutral-400 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Mobile nav menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 py-4 flex flex-col gap-2 bg-neutral-800/90 backdrop-blur-2xl rounded-lg mt-5 absolute top-full max-w-md w-full right-2.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`p-2 ${
                    isActive
                      ? "text-white bg-neutral-700/50 block  rounded-lg font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-neutral-700/50 focus:hover:bg-neutral-700/50 rounded-lg transition-colors"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
