export const globalSectionContentSchema = {
  name: "globalSectionContent",
  title: "Global Section Content",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Internal Title",
      type: "string",
      initialValue: "Main Global Content",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "heroSlides",
      title: "Home Hero Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "subtitle", title: "Badge Text", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            { name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } },
            { name: "videoUrl", title: "Video URL", type: "string" },
            { name: "primaryButtonLabel", title: "Primary Button Label", type: "string" },
            { name: "primaryButtonHref", title: "Primary Button URL", type: "string" },
            { name: "secondaryButtonLabel", title: "Secondary Button Label", type: "string" },
          ],
        },
      ],
    },
    {
      name: "homeTwoHero",
      title: "Home Two Hero",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "highlightedText", title: "Highlighted Text", type: "string" },
        { name: "description", title: "Description", type: "text", rows: 3 },
        { name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } },
        { name: "sideImage", title: "Side Image", type: "image", options: { hotspot: true } },
        { name: "primaryButtonLabel", title: "Primary Button Label", type: "string" },
        { name: "primaryButtonHref", title: "Primary Button URL", type: "string" },
        { name: "secondaryButtonLabel", title: "Secondary Button Label", type: "string" },
        { name: "secondaryButtonHref", title: "Secondary Button URL", type: "string" },
      ],
    },
    {
      name: "homeThreeHero",
      title: "Home Three Hero",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "highlightedText", title: "Highlighted Text", type: "string" },
        { name: "description", title: "Description", type: "text", rows: 3 },
        { name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } },
        { name: "primaryButtonLabel", title: "Primary Button Label", type: "string" },
        { name: "primaryButtonHref", title: "Primary Button URL", type: "string" },
        { name: "secondaryButtonLabel", title: "Secondary Button Label", type: "string" },
        { name: "secondaryButtonHref", title: "Secondary Button URL", type: "string" },
      ],
    },
    {
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text", rows: 4 },
        { name: "primaryImage", title: "Primary Image", type: "image", options: { hotspot: true } },
        { name: "secondaryImage", title: "Secondary Image", type: "image", options: { hotspot: true } },
        { name: "experienceYears", title: "Experience Figure", type: "string" },
        { name: "experienceLabel", title: "Experience Label", type: "string" },
        {
          name: "featureCards",
          title: "Feature Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "string" },
                { name: "icon", title: "Font Awesome Icon Class", type: "string" },
                { name: "accent", title: "Accent Style", type: "string" },
              ],
            },
          ],
        },
        { name: "ctaLabel", title: "Primary CTA Label", type: "string" },
        { name: "ctaHref", title: "Primary CTA URL", type: "string" },
        { name: "phoneLabel", title: "Phone Label", type: "string" },
        { name: "phoneNumber", title: "Phone Number", type: "string" },
      ],
    },
    {
      name: "causesSection",
      title: "Causes Section Header",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "viewAllLabel", title: "View All Button Label", type: "string" },
      ],
    },
    {
      name: "eventsSection",
      title: "Events Section Header",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "viewAllLabel", title: "View All Button Label", type: "string" },
      ],
    },
    {
      name: "blogSection",
      title: "Blog Section Header",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "viewAllLabel", title: "View All Button Label", type: "string" },
      ],
    },
    {
      name: "counterSection",
      title: "Counter Section",
      type: "object",
      fields: [
        {
          name: "items",
          title: "Counter Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "number", title: "Number", type: "string" },
                { name: "label", title: "Label", type: "string" },
                { name: "icon", title: "Font Awesome Icon Class", type: "string" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "volunteerSection",
      title: "Volunteer CTA Section",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text", rows: 4 },
        { name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } },
        { name: "primaryButtonLabel", title: "Primary Button Label", type: "string" },
        { name: "primaryButtonHref", title: "Primary Button URL", type: "string" },
        { name: "secondaryButtonLabel", title: "Secondary Button Label", type: "string" },
        { name: "secondaryButtonHref", title: "Secondary Button URL", type: "string" },
        { name: "reasonsTitle", title: "Reasons Box Title", type: "string" },
        {
          name: "reasons",
          title: "Reasons",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "testimonialSection",
      title: "Testimonial Section Header",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
      ],
    },
    {
      name: "faqSectionHeader",
      title: "FAQ Section Header",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
      ],
    },
    {
      name: "sponsorSection",
      title: "Sponsor Logos",
      type: "object",
      fields: [
        {
          name: "logos",
          title: "Logos",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "image", title: "Logo Image", type: "image", options: { hotspot: true } },
                { name: "alt", title: "Alt Text", type: "string" },
                { name: "url", title: "Optional URL", type: "string" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
