"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Message sent!");
    setForm(emptyForm);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Left — map placeholder */}
      <div className="bg-gray-200 rounded-sm min-h-[420px] w-full" />

      {/* Right — form */}
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Send us a message
          </h2>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu
            nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus
            gravida quis blandit turpis cursus in.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {/* First + Last name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name *"
                required
                value={form.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name *"
                required
                value={form.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email *"
                required
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="sr-only">
                Your Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your Phonenumber *"
                required
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject *"
              required
              value={form.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="sr-only">
              Send message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Send message *"
              required
              value={form.message}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold px-6 py-3 rounded transition-colors cursor-pointer w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
