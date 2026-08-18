import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy - Amrai Agami",
  description: "Learn how Amrai Agami protects and handles your personal and donation data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding your privacy, personal information, and donor records."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            We collect personal information such as your name, email address, mailing address, and payment information when you make a donation, register as a volunteer, or subscribe to our newsletter.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            Your information is used strictly to process transactions, issue tax receipts, communicate campaign updates, and improve user experience. We never sell, lease, or trade donor details to third parties.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security & Encryption</h2>
          <p className="mb-6">
            All credit card and payment communications are processed via PCI-DSS compliant secure payment gateways using 256-bit SSL encryption.
          </p>
        </div>
      </section>
    </>
  );
}
