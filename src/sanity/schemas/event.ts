export const eventSchema = {
  name: "event",
  title: "Events & Galas",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Event Title",
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
      name: "date",
      title: "Date (e.g. 18 OCT, 2026)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "time",
      title: "Time (e.g. 10:00 AM - 04:00 PM)",
      type: "string",
    },
    {
      name: "location",
      title: "Location / Venue",
      type: "string",
    },
    {
      name: "image",
      title: "Event Banner Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "cost",
      title: "Entry / Registration Cost",
      type: "string",
      initialValue: "Free",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    },
    {
      name: "fullDescription",
      title: "Full Event Information",
      type: "text",
      rows: 8,
    },
    {
      name: "organizer",
      title: "Organizer Details",
      type: "object",
      fields: [
        { name: "name", title: "Organizer Name", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
        { name: "email", title: "Email", type: "string" },
      ],
    },
  ],
};
