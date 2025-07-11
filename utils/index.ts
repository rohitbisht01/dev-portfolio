// import blogifyImg from "@/public/blogify.png";
import covidImg from "@/public/covid.png";
import Devflow from "@/public/Devflow.png";
import ProductHunt from "@/public/producthunt.png";
import UnderConstruction from "@/public/undercontruction.jpg";

export const projectsData = [
  {
    title: "LearnForge",
    description:
      "A modern Learning Management System that enables users to create, manage, and enroll in courses with ease. Supports video hosting, secure payments, and a seamless learning experience.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS S3",
      "Better Auth",
      "Stripe",
    ],
    imageUrl: UnderConstruction,
    link: "https://github.com/rohitbisht01/learning-mgmt-app",
  },
  {
    title: "Product Hunt",
    description:
      "Collaborative platform where users can list products and showcase creations. It helps creators display their work, while others explore, engage, and interact with product.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Next Auth",
      "Stripe",
      "Shadcn",
    ],
    imageUrl: ProductHunt,
    link: "https://product-hunt-five.vercel.app/",
  },
  {
    title: "Dev Overflow",
    description:
      "Collaborative platform for developers to ask/answer questions, build tech community, explore job opportunities.",
    tags: ["Next.js", "TypeScript", "Clerk", "Shadcn", "MongoDB", "OpenAI"],
    imageUrl: Devflow,
    link: "https://dev-overflow-bice.vercel.app/",
  },

  {
    title: "Covid-19 Tracker",
    description:
      "Tracks the population (people) who have infected, recovered, and died due to COVID-19",
    tags: ["HTML", "CSS", "ReactJs"],
    imageUrl: covidImg,
    link: "https://github.com/rohitbisht01/Covid-19-Tracker",
  },
];

export const workExperienceData = [
  {
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQFo-ajAhm_zEg/company-logo_200_200/company-logo_200_200/0/1631363721126?e=1734566400&v=beta&t=8OQxU9xZnJrLszR7sQ9wYLgaZbQPHkP_ZheKT-BoJ7I",
    companyName: "Auriss Techonologies",
    position: "Software Developer",
    description: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ratione perspiciatis",
      },
      {
        id: 2,
        text: " Consequatur mollitia nostrum aspernatur minima culpa quas recusandae,",
      },
    ],
    period: "Dec 2022 - Present",
  },
];
