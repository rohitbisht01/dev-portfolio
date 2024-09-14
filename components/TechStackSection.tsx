const techStackItems = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Vercel",
  //   "Cloudinary",
  "Stripe",
  "Git/GitHub",
  "Supabase",
  "VSCode",
  "Shadcn",
];

export const TechStackSection = () => {
  return (
    <div className="">
      <h1 className="font-bold text-xl">Tech Stack i have worked with</h1>
      <div className="mt-4 flex gap-2 items-center flex-wrap">
        {techStackItems.map((item) => {
          return (
            <div
              key={item}
              className="px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded-xl italic"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
