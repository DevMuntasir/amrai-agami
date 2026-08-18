export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonials & Reviews",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Person / Donor Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "designation",
      title: "Role / Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Avatar Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "content",
      title: "Quote / Feedback",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating (1 - 5)",
      type: "number",
      initialValue: 5,
    },
  ],
};
