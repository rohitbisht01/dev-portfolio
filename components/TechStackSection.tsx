import { TextFade } from "./TextFade";

const techStackItems = [
  "JavaScript",
  "Typescript",
  "NextJs",
  "ReactJs",
  "AWS",
  "Redux Toolkit",
  "Jotai",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "NextAuth",
  "Tailwind CSS",
  "Agentic AI",
  "Langchain",
  "LangGraph",
  "RAGs",
];

export const TechStackSection = () => {
  return (
    <TextFade direction="up">
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
    </TextFade>
  );
};
