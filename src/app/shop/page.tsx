import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { ProductCard } from "@/components/ui/ProductCard";
import { getPageContent, getProducts } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Charity Shop - 100% Profits Support Our Campaigns",
  description:
    "Purchase organic apparel, water bottles, and artisan handicrafts. Every purchase funds humanitarian relief.",
};

export default async function ShopPage() {
  const [products, pageContent] = await Promise.all([getProducts(), getPageContent("shop")]);

  return (
    <>
      <PageBanner
        title={pageContent?.banner?.title || "Our Charity Shop"}
        subtitle={pageContent?.banner?.subtitle}
        backgroundImage={pageContent?.banner?.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop" },
        ]}
      />

      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
