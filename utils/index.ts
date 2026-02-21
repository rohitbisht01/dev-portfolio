import covidImg from "@/public/covid.png";
import Devflow from "@/public/Devflow.png";
import ProductHunt from "@/public/producthunt.png";

export const projectsData = [
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

export const blogsData = [
  {
    title: "My Frontend Interview Experience: Real Questions & Learnings",
    description:
      "A detailed breakdown of my frontend interview experience including JavaScript, DSA, machine coding, and system design rounds, along with key learnings and preparation strategies.",
    date: "Jan 15, 2024",
    readTime: "6 min",
    link: "https://medium.com/@rohit_bisht",
  },
  {
    title: "Real-Time Communication in Web Apps: Polling, WebSockets & SSE",
    description:
      "Understand different real-time communication techniques including short polling, long polling, WebSockets, and Server-Sent Events (SSE), when to use each, and their trade-offs.",
    date: "Feb 3, 2024",
    readTime: "8 min",
    link: "https://medium.com/@rohit_bisht",
  },
];
