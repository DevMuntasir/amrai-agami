import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { DonationForm } from "@/components/forms/DonationForm";
import { getCauses, getCauseBySlug } from "@/sanity/lib/fetch";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const causes = await getCauses();
  return causes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cause = await getCauseBySlug(slug);

  if (!cause) return { title: "Cause Not Found" };

  return {
    title: `${cause.title} - Amrai Agami`,
    description: cause.shortDescription,
    openGraph: {
      title: cause.title,
      description: cause.shortDescription,
      images: [{ url: cause.image }],
    },
  };
}

export default async function CauseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const cause = await getCauseBySlug(slug);

  if (!cause) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: cause.title,
    description: cause.shortDescription,
    image: cause.image,
    recipient: {
      "@type": "NGO",
      name: "Amrai Agami",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={cause.title}
        subtitle={`Category: ${cause.category} | Goal: ৳${cause.goal.toLocaleString()}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Causes", href: "/causes" },
          { label: cause.title },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden shadow-xl mb-8 border border-gray-100">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>

              {/* Progress and Stats */}
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#002A8C] uppercase tracking-wider">
                    Funding Status
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    {cause.donorsCount} Supporters
                  </span>
                </div>
                <div className="w-full h-3.5 bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-[#002A8C] to-[#F00101] rounded-full transition-all duration-700"
                    style={{ width: `${cause.progress}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-3 text-center gap-4 pt-2">
                  <div>
                    <span className="text-xs text-gray-500 block">Raised</span>
                    <span className="text-lg font-black text-[#002A8C]">
                      ৳{cause.raised.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Goal</span>
                    <span className="text-lg font-black text-gray-900">
                      ৳{cause.goal.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Achieved</span>
                    <span className="text-lg font-black text-[#F00101]">
                      {cause.progress}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Description */}
              <div className="prose max-w-none text-gray-700 leading-relaxed mb-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#002A8C] mb-4">
                  About This Humanitarian Campaign
                </h2>
                <p className="mb-4 text-base">{cause.shortDescription}</p>
                <p className="mb-6 text-base">{cause.fullDescription}</p>
              </div>

              {/* Donation Form Container */}
              <div id="donate-now-section">
                <DonationForm defaultCause={cause.slug} />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Organizer Card */}
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="text-base font-bold text-gray-900 mb-4">Campaign Organizer</h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#002A8C] text-white flex items-center justify-center font-bold text-lg">
                    AA
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">Amrai Agami Foundation</h5>
                    <span className="text-xs text-gray-500">Verified NGO Partner</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-4">
                  100% of all public donations are delivered directly to verified local implementation partners.
                </p>
                <Link
                  href="/contact-us"
                  className="w-full py-2.5 bg-white hover:bg-gray-100 text-gray-800 text-xs font-bold rounded-xl border border-gray-200 block text-center transition"
                >
                  Contact Organizer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
