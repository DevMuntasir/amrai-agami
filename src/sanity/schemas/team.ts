export const teamSchema = {
  name: "teamMember",
  title: "Team Members",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "designation",
      title: "Designation / Role",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 4,
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook URL", type: "string" },
        { name: "twitter", title: "Twitter URL", type: "string" },
        { name: "linkedin", title: "LinkedIn URL", type: "string" },
      ],
    },
  ],
};
