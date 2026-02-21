"use client";

import Link from "next/link";

type BlogProps = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
};

interface BlogCardProps {
  blog: BlogProps;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const { title, description, date, readTime, link } = blog;

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="mb-4 p-4 bg-gray-100 border border-black/5 rounded-lg hover:bg-gray-200 transition cursor-pointer">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="hidden sm:block text-slate-700 mb-3 leading-relaxed">{description}</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime} read</span>
        </div>
      </div>
    </Link>
  );
};

