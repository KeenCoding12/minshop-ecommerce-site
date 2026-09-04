import Image from "next/image";

export const metadata = {
  title: "About Us | MinShop",
  description: "Learn more about MinShop and our mission.",
};

const stats = [
  { value: "3,000", label: "Gadgets sold" },
  { value: "2,500", label: "Happy customers" },
  { value: "100%", label: "Satisfaction rate" },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Buyer",
    text: "Absolutely love my new gadgets from MinShop. The quality is outstanding and delivery was super fast. Will definitely be ordering again!",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Verified Buyer",
    text: "Great selection of products and competitive prices. Customer support was very responsive when I had a question about my order.",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Verified Buyer",
    text: "MinShop has become my go-to store for all things tech. The product descriptions are accurate and shipping is always on time.",
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "Verified Buyer",
    text: "I was impressed by the smooth shopping experience. The website is easy to navigate and checkout was hassle-free.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-[#1a1a1a] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm tracking-wide mb-2">
            HOME /{" "}
            <span className="text-white font-semibold uppercase">About</span>
          </p>
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </section>

      {/* ── Banner image ── */}
      <section className="bg-[#1a1a1a] pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/about-banner.png"
            alt="MinShop team"
            width={780}
            height={440}
            className="w-full object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/* ── Headline + stats ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-10">
          Quisque Scelerisque Nisi Sodales <br />
          Duis Nonrisus Vel Imperdiet
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Body copy */}
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec
          et odio pellentesque diam volutpat.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Ullamcorper malesuada proin libero nunc consequat interdum varius.
        </p>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-100 rounded-sm p-6 flex flex-col gap-4"
            >
              {/* Avatar placeholder */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0" />
                <div className="flex flex-col gap-1">
                  <div className="h-3 bg-gray-300 rounded w-24" />
                  <div className="h-2.5 bg-gray-200 rounded w-16" />
                </div>
              </div>
              {/* Review text placeholder lines */}
              <div className="flex flex-col gap-2">
                <div className="h-2.5 bg-gray-300 rounded w-full" />
                <div className="h-2.5 bg-gray-300 rounded w-5/6" />
                <div className="h-2.5 bg-gray-300 rounded w-4/6" />
              </div>
            </div>
          ))}
        </div>

        {/* See all reviews */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            See all Reviews
          </a>
        </div>
      </section>
    </>
  );
}
