import { notFound } from "next/navigation";
import Image from "next/image";
import { products, getProductById } from "@/lib/data";
import AddToCartSection from "./components/add-to-cart-section";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found | MinShop" };
  return {
    title: `${product.name} | MinShop`,
    description: product.description.slice(0, 120),
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  // Split description into paragraphs
  const paragraphs = product.description
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <>
      {/* ── Product detail section ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — product image */}
          <div className="bg-gray-100 rounded-sm flex items-center justify-center p-8 min-h-[360px]">
            <Image
              src={product.image}
              alt={product.name}
              width={340}
              height={340}
              className="object-contain w-full max-w-xs h-auto"
              priority
            />
          </div>

          {/* Right — product info */}
          <div className="flex flex-col justify-start gap-4">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl text-gray-800">${product.price.toFixed(2)}</p>

            {/* Description paragraphs */}
            <div className="flex flex-col gap-3 text-sm text-gray-600 leading-relaxed">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <hr className="border-gray-200 my-2" />

            {/* Client: qty + add to cart */}
            <AddToCartSection product={product} />
          </div>
        </div>
      </section>

      {/* ── Extended description below the fold ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <hr className="border-gray-200 mb-10" />
        <div className="flex flex-col gap-5 text-sm text-gray-600 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur. Lacus id enim in nulla
            ridiculus et amet. Eu nullam maecenas nunc et. Parturient
            suspendisse sed nunc dictum pulvinar pretium leo ut. Diam aliquet ac
            arcu blandit imperdiet. Eget odio eros quam massa iaculis morbi arcu
            nulla sed. Iaculis elementum amet facilisis sodales risus aliquet
            vulputate aenean dui. Orci nam id vulputate leo nulla sagittis
            integer urna magna.
          </p>
          <p>
            Congue dictum posuere arcu sodales sem arcu mattis. Egestas nullam
            odio fames in elementum sit eget. Egestas risus iaculis mauris amet
            nunc lectus purus. Arcu non ac maecenas malesuada ullamcorper. Nunc
            sed nisi enim viverra morbi tempor quisque eget quis. Nibh lacus
            eleifend eu consequat. Tellus vestibulum nisi pharetra magnis. Non
            in iaculis luctus bibendum suscipit cras sit in. Bibendum urna amet
            natoque aliquam amet tincidunt enim libero enim. Viverra quis risus
            in urna volutpat. Sed odio praesent sit nibh.
          </p>
          <p>
            Dignissim turpis sed scelerisque semper arcu sit morbi quisque.
            Scelerisque mi viverra faucibus elementum ut proin. Felis ac vel
            dapibus habitant. Arcu faucibus ut enim nunc morbi convallis. Dui
            vitae amet id quam tempor dui quam. Semper nisl a arcu ut a
            habitasse libero. Aenean turpis volutpat nec in morbi. A nibh nunc
            nibh sed. Aliquam tortor mattis semper lacinia diam sed morbi eu.
            Morbi ac leo eu montes. Faucibus porttitor faucibus feugiat felis
            egestas malesuada pellentesque. Fames egestas dignissim tortor elit.
            Sapien ultrices lobortis a massa.
          </p>
        </div>
      </section>
    </>
  );
}
