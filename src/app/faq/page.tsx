import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getFaqs } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) - Donations & Volunteering",
  description:
    "Find answers regarding tax-deductibility, payment methods, volunteering protocols, and transparency reports.",
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Common questions about our humanitarian initiatives, financial transparency, and volunteering."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <FaqAccordion />
    </>
  );
}
