import { groq } from "next-sanity";

// Causes
export const causesQuery = groq`
  *[_type == "cause"] | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    title,
    category,
    "image": image.asset->url,
    raised,
    goal,
    progress,
    donorsCount,
    shortDescription,
    fullDescription,
    featured
  }
`;

export const causeBySlugQuery = groq`
  *[_type == "cause" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    title,
    category,
    "image": image.asset->url,
    raised,
    goal,
    progress,
    donorsCount,
    shortDescription,
    fullDescription,
    featured
  }
`;

// Events
export const eventsQuery = groq`
  *[_type == "event"] | order(date asc) {
    "id": _id,
    "slug": slug.current,
    title,
    date,
    time,
    location,
    "image": image.asset->url,
    cost,
    shortDescription,
    fullDescription,
    organizer {
      name,
      phone,
      email
    }
  }
`;

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    title,
    date,
    time,
    location,
    "image": image.asset->url,
    cost,
    shortDescription,
    fullDescription,
    organizer {
      name,
      phone,
      email
    }
  }
`;

// Blog Posts
export const postsQuery = groq`
  *[_type == "post"] | order(date desc) {
    "id": _id,
    "slug": slug.current,
    title,
    "image": image.asset->url,
    date,
    author,
    "authorImage": authorImage.asset->url,
    category,
    tags,
    commentsCount,
    shortDescription,
    fullContent
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    title,
    "image": image.asset->url,
    date,
    author,
    "authorImage": authorImage.asset->url,
    category,
    tags,
    commentsCount,
    shortDescription,
    fullContent
  }
`;

// Team Members
export const teamQuery = groq`
  *[_type == "teamMember"] | order(_createdAt asc) {
    "id": _id,
    "slug": slug.current,
    name,
    designation,
    "image": image.asset->url,
    bio,
    email,
    phone,
    socials {
      facebook,
      twitter,
      linkedin
    }
  }
`;

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    name,
    designation,
    "image": image.asset->url,
    bio,
    email,
    phone,
    socials {
      facebook,
      twitter,
      linkedin
    }
  }
`;

// Products
export const productsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    name,
    "image": image.asset->url,
    price,
    oldPrice,
    rating,
    reviewsCount,
    category,
    description,
    inStock
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    name,
    "image": image.asset->url,
    price,
    oldPrice,
    rating,
    reviewsCount,
    category,
    description,
    inStock
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    "id": _id,
    name,
    designation,
    "image": image.asset->url,
    content,
    rating
  }
`;

// FAQs
export const faqsQuery = groq`
  *[_type == "faq"] | order(_createdAt asc) {
    "id": _id,
    question,
    answer,
    category
  }
`;

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    email,
    phone,
    address,
    socials {
      facebook,
      twitter,
      linkedin,
      instagram
    }
  }
`;

export const globalSectionContentQuery = groq`
  *[_type == "globalSectionContent"][0] {
    heroSlides[]{
      subtitle,
      title,
      description,
      "backgroundImage": backgroundImage.asset->url,
      videoUrl,
      primaryButtonLabel,
      primaryButtonHref,
      secondaryButtonLabel
    },
    homeTwoHero{
      badge,
      title,
      highlightedText,
      description,
      "backgroundImage": backgroundImage.asset->url,
      "sideImage": sideImage.asset->url,
      primaryButtonLabel,
      primaryButtonHref,
      secondaryButtonLabel,
      secondaryButtonHref
    },
    homeThreeHero{
      badge,
      title,
      highlightedText,
      description,
      "backgroundImage": backgroundImage.asset->url,
      primaryButtonLabel,
      primaryButtonHref,
      secondaryButtonLabel,
      secondaryButtonHref
    },
    aboutSection{
      badge,
      title,
      description,
      "primaryImage": primaryImage.asset->url,
      "secondaryImage": secondaryImage.asset->url,
      experienceYears,
      experienceLabel,
      featureCards[]{
        title,
        description,
        icon,
        accent
      },
      ctaLabel,
      ctaHref,
      phoneLabel,
      phoneNumber
    },
    causesSection,
    eventsSection,
    blogSection,
    counterSection{
      items[]{
        number,
        label,
        icon
      }
    },
    volunteerSection{
      badge,
      title,
      description,
      "backgroundImage": backgroundImage.asset->url,
      primaryButtonLabel,
      primaryButtonHref,
      secondaryButtonLabel,
      secondaryButtonHref,
      reasonsTitle,
      reasons
    },
    testimonialSection,
    faqSectionHeader,
    sponsorSection{
      logos[]{
        "image": image.asset->url,
        alt,
        url
      }
    }
  }
`;

export const pageContentByKeyQuery = groq`
  *[_type == "pageContent" && pageKey == $pageKey][0] {
    pageKey,
    banner{
      title,
      subtitle,
      "backgroundImage": backgroundImage.asset->url
    },
    teamSection,
    donateSection,
    contactSection,
    volunteerFormSection
  }
`;
