import Image from "next/image";
import Link from "next/link";
import {
  GiftIcon,
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { products } from "@/lib/data";
import { categories } from "@/lib/categories";
import ProductCard from "./components/product-card";

const features = [
  { icon: GiftIcon, label: "Free Shipping" },
  { icon: ArrowPathIcon, label: "100% Money Back" },
  { icon: ChatBubbleLeftRightIcon, label: "Support 24/7" },
  { icon: ShieldCheckIcon, label: "100% Payment Secure" },
];

export default function HomePage() {
  const [laptops, ...otherCategories] = categories;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-neutral-900 pt-18 lg:pt-28 relative">
        <div className="container grid gap-4 lg:grid-cols-2">
          {/* Content */}
          <div className="z-10 flex flex-col gap-3 lg:mt-16">
            <p className="text-neutral-400 text-sm">From $999</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              iphone 12 pro
            </h1>
            <Link
              href="/products"
              className="mt-2 inline-block border border-white text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-white hover:text-black transition-colors w-fit"
            >
              Buy Now
            </Link>
          </div>

          {/* Hero image */}
          <div className="max-w-max mx-auto">
            <Image
              src="/images/hero-img.png"
              alt="iPhone 12 Pro"
              width={496}
              height={536}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Features bar */}
        <div className="absolute bottom-5 lg:bottom-9 left-0 right-0">
          <div className="container">
            <div className="bg-neutral-800 rounded-t-lg grid grid-cols-2 sm:grid-cols-4 divide-x divide-neutral-700">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 px-5 py-4">
                  <Icon className="size-10 text-neutral-300 shrink-0" />
                  <span className="text-gray-200 text-xl font-semibold">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container">
          {/* Large Laptops card */}
          <Link href="/products">
            <div className="bg-gray-50 rounded-sm p-6 flex flex-col justify-between h-full min-h-65 hover:shadow-md transition-shadow overflow-hidden relative">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {laptops.name}
                </h3>
                <p className="text-gray-500 text-sm">{laptops.count}</p>
              </div>
              <div className="flex justify-center items-end mt-4">
                <Image
                  src={laptops.image}
                  alt={laptops.name}
                  width={240}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* 2×2 grid of other categories */}
          <div className="grid grid-cols-2 gap-4">
            {otherCategories.map((cat) => (
              <Link key={cat.id} href="/products">
                <div className="bg-gray-50 rounded-sm p-4 flex flex-col justify-between min-h-[124px] hover:shadow-md transition-shadow overflow-hidden">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {cat.name}
                    </h3>
                    <p className="text-gray-500 text-xs">{cat.count}</p>
                  </div>
                  <div className="flex justify-center items-end mt-2">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={100}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Feugiat pretium nibh ipsum consequat commodo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
