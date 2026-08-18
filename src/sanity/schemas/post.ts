export const postSchema = {
  name: "post",
  title: "Blog & Stories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Story / Article Title",
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
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "date",
      title: "Published Date",
      type: "string",
      initialValue: "Today",
    },
    {
      name: "author",
      title: "Author Name",
      type: "string",
    },
    {
      name: "authorImage",
      title: "Author Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "commentsCount",
      title: "Comments Count",
      type: "number",
      initialValue: 0,
    },
    {
      name: "shortDescription",
      title: "Summary Description",
      type: "text",
      rows: 3,
    },
    {
      name: "fullContent",
      title: "Full Article Content",
      type: "text",
      rows: 10,
    },
  ],
};
