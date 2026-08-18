import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { getPosts, getPostBySlug } from "@/sanity/lib/fetch";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPostBySlug(slug);

  if (!blog) return { title: "Article Not Found" };

  return {
    title: `${blog.title} - Amrai Agami Blog`,
    description: blog.shortDescription,
    openGraph: {
      title: blog.title,
      description: blog.shortDescription,
      images: [{ url: blog.image }],
    },
  };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getPostBySlug(slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.shortDescription,
    image: blog.image,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    datePublished: "2026-09-15",
    publisher: {
      "@type": "Organization",
      name: "Amrai Agami",
      logo: {
        "@type": "ImageObject",
        url: "https://amraiagami.org/assets/images/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={blog.title}
        subtitle={`By ${blog.author} | ${blog.date}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-8 border border-gray-100">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          {/* Author & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div>
                <span className="block text-xs text-gray-500">Written by</span>
                <span className="text-sm font-bold text-gray-900">{blog.author}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>
                <i className="fa-regular fa-calendar text-[#F00101] mr-1.5"></i>
                {blog.date}
              </span>
              <span>
                <i className="fa-regular fa-comment text-[#002A8C] mr-1.5"></i>
                {blog.commentsCount} Comments
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6 text-base">
            <p className="text-lg font-medium text-gray-900 leading-relaxed">
              {blog.shortDescription}
            </p>
            <p>{blog.fullContent}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-8 mt-8 border-t border-gray-100">
            <span className="text-xs font-bold text-gray-600 mr-2">Tags:</span>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 text-[#002A8C] text-xs font-bold rounded-lg border border-blue-100"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
