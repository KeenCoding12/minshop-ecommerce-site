import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">MinShop</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Non suscipit at porta
              ultrices
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Products", href: "/products" },
                { label: "Login", href: "#" },
                { label: "Sign Up", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom Area */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Custom Area
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "My Account", href: "#" },
                { label: "Tracking List", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Orders", href: "#" },
                { label: "My Cart", href: "/cart" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Information */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              More Information
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
              dui, a porta ante lectus
            </p>
            {/* Payment method badges */}
            <div className="flex flex-wrap gap-2">
              {["VISA", "AMEX", "Mastercard", "PayPal"].map((method) => (
                <span
                  key={method}
                  className="bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-gray-500">
            Copyright &copy; 2026 &nbsp; by keencoding
          </p>
        </div>
      </div>
    </footer>
  );
}
