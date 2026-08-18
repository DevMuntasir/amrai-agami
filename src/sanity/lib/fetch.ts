import { sanityClient } from "../client";
import { isSanityConfigured } from "../env";
import {
  causesQuery,
  causeBySlugQuery,
  eventsQuery,
  eventBySlugQuery,
  postsQuery,
  postBySlugQuery,
  teamQuery,
  teamMemberBySlugQuery,
  productsQuery,
  productBySlugQuery,
  testimonialsQuery,
  faqsQuery,
  siteSettingsQuery,
} from "../queries";

// Local Data Fallbacks
import localCauses from "@/data/causes.json";
import localEvents from "@/data/events.json";
import localPosts from "@/data/blog.json";
import localTeam from "@/data/team.json";
import localProducts from "@/data/products.json";
import localTestimonials from "@/data/testimonials.json";
import localFaqs from "@/data/faqs.json";
import { Cause, CharityEvent, BlogPost, TeamMember, Product, Testimonial, FAQ } from "@/types";

/**
 * Fetch Causes (Sanity -> Fallback to local data)
 */
export async function getCauses(): Promise<Cause[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<Cause[]>(causesQuery);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity fetch error for causes, using local data fallback:", err);
    }
  }
  return localCauses as Cause[];
}

export async function getCauseBySlug(slug: string): Promise<Cause | null> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<Cause>(causeBySlugQuery, { slug });
      if (data) return data;
    } catch (err) {
      console.warn(`Sanity fetch error for cause "${slug}", using local fallback:`, err);
    }
  }
  return (localCauses as Cause[]).find((c) => c.slug === slug) || null;
}

/**
 * Fetch Events (Sanity -> Fallback to local data)
 */
export async function getEvents(): Promise<CharityEvent[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<CharityEvent[]>(eventsQuery);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity fetch error for events, using local data fallback:", err);
    }
  }
  return localEvents as CharityEvent[];
}

export async function getEventBySlug(slug: string): Promise<CharityEvent | null> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<CharityEvent>(eventBySlugQuery, { slug });
      if (data) return data;
    } catch (err) {
      console.warn(`Sanity fetch error for event "${slug}", using local fallback:`, err);
    }
  }
  return (localEvents as CharityEvent[]).find((e) => e.slug === slug) || null;
}

/**
 * Fetch Blog Posts (Sanity -> Fallback to local data)
 */
export async function getPosts(): Promise<BlogPost[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<BlogPost[]>(postsQuery);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity fetch error for posts, using local data fallback:", err);
    }
  }
  return localPosts as BlogPost[];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<BlogPost>(postBySlugQuery, { slug });
      if (data) return data;
    } catch (err) {
      console.warn(`Sanity fetch error for post "${slug}", using local fallback:`, err);
    }
  }
  return (localPosts as BlogPost[]).find((p) => p.slug === slug) || null;
}

/**
 * Fetch Team Members (Sanity -> Fallback to local data)
 */
export async function getTeam(): Promise<TeamMember[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<TeamMember[]>(teamQuery);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity fetch error for team, using local data fallback:", err);
    }
  }
  return localTeam as TeamMember[];
}

export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | null> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<TeamMember>(teamMemberBySlugQuery, { slug });
      if (data) return data;
    } catch (err) {
      console.warn(`Sanity fetch error for team member "${slug}", using local fallback:`, err);
    }
  }
  return (localTeam as TeamMember[]).find((m) => m.slug === slug) || null;
}

/**
 * Fetch Shop Products (Sanity -> Fallback to local data)
 */
export async function getProducts(): Promise<Product[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<Product[]>(productsQuery);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity fetch error for products, using local data fallback:", err);
    }
  }
  return localProducts as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<Product>(productBySlugQuery, { slug });
      if (data) return data;
    } catch (err) {
      console.warn(`Sanity fetch error for product "${slug}", using local fallback:`, err);
    }
  }
  return (localProducts as Product[]).find((p) => p.slug === slug) || null;
}

/**
 * Fetch Testimonials (Sanity -> Fallback to local data)
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<Testimonial[]>(testimonialsQuery);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity fetch error for testimonials, using local fallback:", err);
    }
  }
  return localTestimonials as Testimonial[];
}

/**
 * Fetch FAQs (Sanity -> Fallback to local data)
 */
export async function getFaqs(): Promise<FAQ[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch<FAQ[]>(faqsQuery);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Sanity fetch error for faqs, using local fallback:", err);
    }
  }
  return localFaqs as FAQ[];
}

/**
 * Fetch Site Settings (Sanity -> Fallback)
 */
export async function getSiteSettings() {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch(siteSettingsQuery);
      if (data) return data;
    } catch (err) {
      console.warn("Sanity fetch error for site settings, using fallback:", err);
    }
  }
  return {
    siteName: "Amrai Agami",
    siteDescription: "Nonprofit NGO Fundraising & Donation Platform",
    email: "support@amraiagami.org",
    phone: "+880 1874303208",
  };
}
