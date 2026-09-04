import { MapPinIcon, PhoneIcon, InboxIcon } from "@heroicons/react/24/outline";
import ContactForm from "./components/contact-form";

export const metadata = {
  title: "Contact | MinShop",
  description: "Get in touch with the MinShop team.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-neutral-900 py-14">
        <div className="container text-center">
          <p className="text-neutral-400 tracking-wide mb-2">
            HOME / <span className="text-white font-semibold">Contact</span>
          </p>
          <h1 className="text-white text-4xl font-bold">Contact</h1>
        </div>
      </section>

      {/* ── Info bar ── */}
      <section className="bg-neutral-900 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-sm grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 px-6 py-6">
            {/* Location */}
            <div className="flex items-start gap-4 pb-5 sm:pb-0 sm:pr-6">
              <MapPinIcon className="size-6 text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-neutral-400">Location</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 py-5 sm:py-0 sm:px-6">
              <PhoneIcon className="w-6 h-6 text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-neutral-900 mb-1">
                  Phone Numbers
                </p>
                <p className="text-sm text-neutral-600">1-555-123-4567</p>
                <p className="text-sm text-neutral-600">1-800-123-4567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 pt-5 sm:pt-0 sm:pl-6">
              <InboxIcon className="w-6 h-6 text-gray-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Email Address
                </p>
                <p className="text-sm text-gray-600">info@company.com</p>
                <p className="text-sm text-gray-600">contact@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact form (client component) ── */}
      <ContactForm />
    </>
  );
}
