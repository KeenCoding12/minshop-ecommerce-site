import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-auto pt-12 pb-5">
      {/* top footer */}
      <div className="container pb-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">MinShop</h3>
            <p className="leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Non suscipit at porta
              ultrices
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {["About Us", "Contact Us", "Products", "Login", "Sign Up"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={"#"}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Custom Area */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Custom Area
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "My Account",
                "Tracking List",
                "Privacy Policy",
                "Orders",
                "My Cart",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="hover:text-white transition-colors"
                  >
                    {link}
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
            <p className="text-sm leading-relaxed text-neutral-400 mb-5">
              Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
              dui, a porta ante lectus
            </p>
            {/* Payment method badges */}
            <div className="flex flex-wrap gap-2">
              {["VISA", "Mastercard", "PayPal"].map((method) => (
                <span
                  key={method}
                  className="bg-neutral-700 text-white text-xs font-semibold px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-neutral-800 pt-5">
        <div className="container">
          <p className="text-neutral-500">
            Copyright &copy; 2026 &nbsp; by keencoding
          </p>
        </div>
      </div>
    </footer>
  );
}
