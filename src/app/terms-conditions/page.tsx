import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Terms & Conditions - Amrai Agami",
  description: "Read the terms and conditions governing the use of Amrai Agami's services and donations.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageBanner
        title="Terms & Conditions"
        subtitle="Please review the terms of service governing donations and use of our platform."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using Amrai Agami, you agree to be bound by these Terms and all applicable local, national, and international laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Donation Policy & Refunds</h2>
          <p className="mb-6">
            Charitable donations made to Amrai Agami are non-refundable unless made erroneously or fraudulently. In such rare cases, please notify support@amraiagami.org within 14 days.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
          <p className="mb-6">
            All text, logos, visual graphics, photos, and video assets are the property of Amrai Agami and protected by copyright regulations.
          </p>
        </div>
      </section>
    </>
  );
}
