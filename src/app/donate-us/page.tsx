import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { DonationForm } from "@/components/forms/DonationForm";
import { CounterSection } from "@/components/sections/CounterSection";
import {
  getGlobalSectionContent,
  getPageContent,
} from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Donate Online - Sponsor Hope & Change",
  description:
    "Make an instant, secure tax-deductible donation to fund education, food security, and healthcare projects.",
};

export default async function DonateUsPage() {
  const [pageContent, globalContent] = await Promise.all([
    getPageContent("donate-us"),
    getGlobalSectionContent(),
  ]);

  return (
    <>
      <PageBanner
        title={pageContent?.banner?.title || "Make A Secure Donation"}
        subtitle={pageContent?.banner?.subtitle}
        backgroundImage={pageContent?.banner?.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Donate Us" },
        ]}
      />

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
              {pageContent?.donateSection?.badge || "Direct Giving Portal"}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {pageContent?.donateSection?.title || "Your Compassion Transforms Real Lives"}
            </h2>
            <p className="text-gray-600 text-sm">
              {pageContent?.donateSection?.description || "Select an amount below or specify a custom donation. All transactions are SSL encrypted."}
            </p>
          </div>

          <DonationForm />
        </div>
      </section>

      <CounterSection items={globalContent.counterSection.items} />
    </>
  );
}
