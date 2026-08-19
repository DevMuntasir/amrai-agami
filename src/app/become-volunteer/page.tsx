import { BecomeVolunteerPageClient } from "@/components/pages/BecomeVolunteerPageClient";
import { defaultPageContent } from "@/sanity/lib/defaultContent";
import { getPageContent } from "@/sanity/lib/fetch";
import { PageBannerContent, VolunteerFormSectionContent } from "@/types";

export default async function BecomeVolunteerPage() {
  const pageContent = await getPageContent("become-volunteer");
  const fallback = defaultPageContent["become-volunteer"];
  const banner: PageBannerContent = {
    title: pageContent?.banner?.title || fallback.banner?.title || "Become A Volunteer",
    subtitle: pageContent?.banner?.subtitle || fallback.banner?.subtitle,
    backgroundImage: pageContent?.banner?.backgroundImage || fallback.banner?.backgroundImage,
  };
  const content: VolunteerFormSectionContent = {
    badge:
      pageContent?.volunteerFormSection?.badge ||
      fallback.volunteerFormSection?.badge ||
      "Registration Form",
    title:
      pageContent?.volunteerFormSection?.title ||
      fallback.volunteerFormSection?.title ||
      "Volunteer Application",
    description:
      pageContent?.volunteerFormSection?.description ||
      fallback.volunteerFormSection?.description ||
      "",
    successTitle:
      pageContent?.volunteerFormSection?.successTitle ||
      fallback.volunteerFormSection?.successTitle ||
      "Application Received!",
    successMessage:
      pageContent?.volunteerFormSection?.successMessage ||
      fallback.volunteerFormSection?.successMessage ||
      "",
    resetButtonLabel:
      pageContent?.volunteerFormSection?.resetButtonLabel ||
      fallback.volunteerFormSection?.resetButtonLabel ||
      "Submit Another Application",
    submitButtonLabel:
      pageContent?.volunteerFormSection?.submitButtonLabel ||
      fallback.volunteerFormSection?.submitButtonLabel ||
      "Submit Volunteer Application",
  };

  return (
    <BecomeVolunteerPageClient
      banner={banner}
      content={content}
    />
  );
}
