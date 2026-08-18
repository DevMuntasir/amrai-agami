export const productSchema = {
  name: "product",
  title: "Shop Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
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
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "price",
      title: "Price ($)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: "oldPrice",
      title: "Original / Old Price ($)",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating (1 to 5)",
      type: "number",
      initialValue: 5,
    },
    {
      name: "reviewsCount",
      title: "Reviews Count",
      type: "number",
      initialValue: 0,
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      rows: 4,
    },
    {
      name: "inStock",
      title: "In Stock?",
      type: "boolean",
      initialValue: true,
    },
  ],
};
