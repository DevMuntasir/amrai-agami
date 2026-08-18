import { MetadataRoute } from "next";
import causesData from "@/data/causes.json";
import eventsData from "@/data/events.json";
import blogData from "@/data/blog.json";
import teamData from "@/data/team.json";
import productsData from "@/data/products.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amraiagami.org";

  const staticRoutes = [
    "",
    "/home-2",
    "/home-3",
    "/about-us",
    "/causes",
    "/events",
    "/our-team",
    "/become-volunteer",
    "/donate-us",
    "/faq",
    "/blog",
    "/shop",
    "/cart",
    "/checkout",
    "/contact-us",
    "/privacy-policy",
    "/terms-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const causeRoutes = causesData.map((cause) => ({
    url: `${baseUrl}/causes/${cause.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const eventRoutes = eventsData.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogData.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const teamRoutes = teamData.map((member) => ({
    url: `${baseUrl}/our-team/${member.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const productRoutes = productsData.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...causeRoutes,
    ...eventRoutes,
    ...blogRoutes,
    ...teamRoutes,
    ...productRoutes,
  ];
}
