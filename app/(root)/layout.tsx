import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
