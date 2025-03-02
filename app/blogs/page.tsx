"use client";

import React from "react";
import blogsContext from "./_content/blogs.json";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="">
      <div>
        <Link href="/blogs" className="text-2xl font-bold cursor-pointer">
          Blogs
        </Link>{" "}
        by <Link href="/">Rohit</Link>
      </div>

      <div className="my-8">
        {blogsContext.map((blog) => (
          <BlogSection blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogSection = ({ blog }: { blog: any }) => {
  return (
    <div className="my-8">
      <Link href={`/blogs/${blog.id}`} className="cursor-pointer">
        <h1 className="text-2xl font-bold text-blue-600">{blog.title}</h1>
        <p className="text-gray-400">{blog.created_at}</p>
        <p className="">{blog.description}</p>
      </Link>
    </div>
  );
};

export default BlogPage;
