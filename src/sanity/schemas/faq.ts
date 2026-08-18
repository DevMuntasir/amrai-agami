export const faqSchema = {
  name: "faq",
  title: "Frequently Asked Questions",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "General" },
          { title: "Donations", value: "Donations" },
          { title: "Volunteering", value: "Volunteering" },
          { title: "Legal & Tax", value: "Legal & Tax" },
        ],
      },
    },
  ],
};
