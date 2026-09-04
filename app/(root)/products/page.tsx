import { products } from "@/lib/data";
import ProductsClient from "./components/products-client";

export const metadata = {
  title: "Products | MinShop",
  description: "Browse all our gadgets and electronics",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page hero banner */}
      <section className="bg-[#1a1a1a] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm tracking-wide mb-2">
            HOME /{" "}
            <span className="text-white font-semibold uppercase">Products</span>
          </p>
          <h1 className="text-white text-4xl font-bold">Products</h1>
        </div>
      </section>

      {/* Products grid with sort — client component */}
      <ProductsClient products={products} />
    </>
  );
}
