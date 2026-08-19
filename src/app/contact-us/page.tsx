import { ContactUsPageClient } from "@/components/pages/ContactUsPageClient";
import { defaultPageContent } from "@/sanity/lib/defaultContent";
import { getPageContent } from "@/sanity/lib/fetch";
import { ContactSectionContent, PageBannerContent } from "@/types";

export default async function ContactUsPage() {
  const pageContent = await getPageContent("contact-us");
  const fallback = defaultPageContent["contact-us"];
  const banner: PageBannerContent = {
    title: pageContent?.banner?.title || fallback.banner?.title || "Contact Our Team",
    subtitle: pageContent?.banner?.subtitle || fallback.banner?.subtitle,
    backgroundImage: pageContent?.banner?.backgroundImage || fallback.banner?.backgroundImage,
  };
  const content: ContactSectionContent = {
    infoBadge:
      pageContent?.contactSection?.infoBadge || fallback.contactSection?.infoBadge || "Get In Touch",
    infoTitle:
      pageContent?.contactSection?.infoTitle ||
      fallback.contactSection?.infoTitle ||
      "We Are Always Ready To Help You",
    infoDescription:
      pageContent?.contactSection?.infoDescription ||
      fallback.contactSection?.infoDescription ||
      "",
    addressTitle:
      pageContent?.contactSection?.addressTitle ||
      fallback.contactSection?.addressTitle ||
      "Main Headquarters",
    address: pageContent?.contactSection?.address || fallback.contactSection?.address || "",
    emailTitle:
      pageContent?.contactSection?.emailTitle || fallback.contactSection?.emailTitle || "Email Inquiry",
    email: pageContent?.contactSection?.email || fallback.contactSection?.email || "",
    phoneTitle:
      pageContent?.contactSection?.phoneTitle || fallback.contactSection?.phoneTitle || "Phone Number",
    phone: pageContent?.contactSection?.phone || fallback.contactSection?.phone || "",
    formTitle: pageContent?.contactSection?.formTitle || fallback.contactSection?.formTitle || "Leave A Message",
    successTitle:
      pageContent?.contactSection?.successTitle || fallback.contactSection?.successTitle || "Message Sent!",
    successMessage:
      pageContent?.contactSection?.successMessage || fallback.contactSection?.successMessage || "",
    resetButtonLabel:
      pageContent?.contactSection?.resetButtonLabel ||
      fallback.contactSection?.resetButtonLabel ||
      "Send Another Message",
    submitButtonLabel:
      pageContent?.contactSection?.submitButtonLabel ||
      fallback.contactSection?.submitButtonLabel ||
      "Send Message",
  };

  return (
    <ContactUsPageClient
      banner={banner}
      content={content}
    />
  );
}
