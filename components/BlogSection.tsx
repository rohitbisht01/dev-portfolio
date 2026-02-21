import { blogsData } from "@/utils";
import { BlogCard } from "./BlogCard";

export default function BlogSection() {
  return (
      <div className="mt-4">
        {blogsData.map((blog, index) => {
          return <BlogCard key={index} blog={blog} />;
        })}
      </div>
  );
}

