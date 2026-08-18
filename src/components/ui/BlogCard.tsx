"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface BlogCardProps {
  blog: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { t } = useLanguage();

  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-[#002A8C] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
          {blog.category}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1.5">
              <i className="fa-regular fa-calendar text-[#F00101]"></i> {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fa-regular fa-comment text-[#002A8C]"></i> {blog.commentsCount} Comments
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#002A8C] transition">
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h3>

          <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed mb-6">
            {blog.shortDescription}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
            <span className="text-xs font-bold text-gray-800">{blog.author}</span>
          </div>
          <Link
            href={`/blog/${blog.slug}`}
            className="text-xs font-bold text-[#F00101] hover:text-[#002A8C] flex items-center gap-1 transition"
          >
            <span>{t("read_full_story")}</span>
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};
