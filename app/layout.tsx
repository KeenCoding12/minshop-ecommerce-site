import type { Metadata } from "next";
import { DM_Sans, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MinShop",
  description: "Your one-stop gadget shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.className} ${raleway.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
