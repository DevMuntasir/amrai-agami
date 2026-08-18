export const causeSchema = {
  name: "cause",
  title: "Causes & Campaigns",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "Education" },
          { title: "Medical", value: "Medical" },
          { title: "Food", value: "Food" },
          { title: "Water", value: "Water" },
          { title: "Emergency", value: "Emergency" },
        ],
      },
    },
    {
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "raised",
      title: "Amount Raised ($)",
      type: "number",
      initialValue: 0,
    },
    {
      name: "goal",
      title: "Goal Amount ($)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "progress",
      title: "Progress Percentage (%)",
      type: "number",
    },
    {
      name: "donorsCount",
      title: "Number of Donors",
      type: "number",
      initialValue: 0,
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    },
    {
      name: "fullDescription",
      title: "Full Story & Details",
      type: "text",
      rows: 8,
    },
    {
      name: "featured",
      title: "Featured on Homepage?",
      type: "boolean",
      initialValue: false,
    },
  ],
};
