export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings & Branding",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Organization Name",
      type: "string",
      initialValue: "Amrai Agami",
    },
    {
      name: "siteDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
    },
    {
      name: "email",
      title: "Support Email",
      type: "string",
      initialValue: "support@amraiagami.org",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      initialValue: "+880 1874303208",
    },
    {
      name: "address",
      title: "Physical Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "string" },
        { name: "twitter", title: "Twitter", type: "string" },
        { name: "linkedin", title: "LinkedIn", type: "string" },
        { name: "instagram", title: "Instagram", type: "string" },
      ],
    },
  ],
};
