import path from "path";
import React from "react";
import fs from "fs";
import blogs from "../_content/blogs.json";
// import ReactMarkdown from "react-markdown";
import Link from "next/link";

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const filePath = path.join(process.cwd(), "../_content", `${id}.md`);
  let fileContent;
  try {
    fileContent = fs.readFileSync(filePath, "utf8");
    console.log(fileContent);
  } catch (error) {
    console.log(error);
  }

  const blog = blogs.filter((blog) => blog.id === id);

  return (
    <section>
      <div>
        <Link href="/blogs" className="text-2xl font-bold cursor-pointer">
          Blogs
        </Link>{" "}
        by <Link href="/">Rohit</Link>
      </div>
      <div className="my-8">
        <h1 className="font-bold text-blue-600 text-2xl">{blog[0].title}</h1>
        <p className="text-gray-500 text-base">{blog[0].created_at}</p>
      </div>
      {/* <ReactMarkdown
        className={` markdown-container w-full mt-10`}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          [
            rehypeExternalLinks,
            { target: "_blank", rel: "noopener noreferrer" },
          ],
        ]}
        components={{
          img: ({ ...props }) => (
            <Zoom>
              <img {...props} style={{ maxWidth: "100%" }} />
            </Zoom>
          ),
          video: ({ ...props }) => {
            const { width = "100%", height = "auto", ...rest } = props;
            return (
              <video
                {...rest}
                controls
                style={{
                  width,
                  height,
                  borderRadius: "8px",
                }}
              >
                Your browser does not support the video tag.
              </video>
            );
          },
          iframe: ({ ...props }) => (
            <span
              style={{
                display: "inline-block",
                position: "relative",
                width: props.width || "640px",
                height: props.height || "360px",
                maxWidth: "100%",
                margin: "0 auto",
              }}
            >
              <iframe
                {...props}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "0",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </span>
          ),
        }}
      >
        {fileContent}
      </ReactMarkdown> */}
    </section>
  );
};

export default BlogDetailsPage;
