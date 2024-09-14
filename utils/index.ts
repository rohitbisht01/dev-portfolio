import covidImg from "@/public/covid.png";
import Devflow from "@/public/Devflow.png";

export const projectsData = [
  {
    title: "Product Hunt",
    description:
      "Collaborative platform where users can list products and showcase creations. It helps creators display their work, while others explore, engage, and interact with product.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Next Auth", "Shadcn"],
    imageUrl: Devflow,
    link: "https://dev-overflow-bice.vercel.app/",
  },
  {
    title: "Dev Overflow",
    description:
      "Collaborative platform for developers to ask/answer questions, build tech community, explore job opportunities.",
    tags: ["Next.js", "TypeScript", "Clerk", "Shadcn", "MongoDB", "OpenAI"],
    imageUrl: Devflow,
    link: "https://dev-overflow-bice.vercel.app/",
  },
  //   {
  //     title: "Sketchbook",
  //     description:
  //       "Sketchbook is a drawing application. Draw on one screen, and your art instantly appears on the other screen.",
  //     tags: ["ReactJs", "Next.js", "Canvas", "Socket.io"],
  //     // imageUrl: SketchBook,
  //     link: "https://sketchbook-ets6ff5xp-rohitbisht01.vercel.app/",
  //   },

  {
    title: "Covid-19 Tracker",
    description:
      "Tracks the population (people) who have infected, recovered, and died due to COVID-19",
    tags: ["HTML", "CSS", "ReactJs"],
    imageUrl: covidImg,
    link: "https://github.com/rohitbisht01/Covid-19-Tracker",
  },
];
