import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { BlogCard } from "@/components/ui/BlogCard";
import { getPageContent, getPosts } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Blog & Stories - Amrai Agami",
  description:
    "Read inspiring human stories, mission field logs, and non-profit insights from the Amrai Agami editorial team.",
};

export default async function BlogPage() {
  const [posts, pageContent] = await Promise.all([getPosts(), getPageContent("blog")]);

  return (
    <>
      <PageBanner
        title={pageContent?.banner?.title || "Our News & Stories"}
        subtitle={pageContent?.banner?.subtitle}
        backgroundImage={pageContent?.banner?.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} blog={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
