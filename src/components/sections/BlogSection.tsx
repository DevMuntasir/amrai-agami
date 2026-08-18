import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types";
import { BlogCard } from "@/components/ui/BlogCard";
import blogData from "@/data/blog.json";

interface BlogSectionProps {
  limit?: number;
  title?: string;
  subtitle?: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  limit,
  title = "Insights, Stories & Campaign Updates",
  subtitle = "Our Latest News",
}) => {
  const displayedBlogs = limit ? blogData.slice(0, limit) : blogData;

  return (
    <section className="py-20 md:py-28 bg-gray-50/70">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {title}
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-600 uppercase tracking-wider"
          >
            <span>View All Stories</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog as BlogPost} />
          ))}
        </div>
      </div>
    </section>
  );
};
