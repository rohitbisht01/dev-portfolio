// import blogifyImg from "@/public/blogify.png";
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
    title: "Heart Match",
    description:
      "Find your perfect match with Heart Match. Browse profiles, express interest, and chat when the feeling's mutual.",
    tags: ["Next.js", "TypeScript", "NextAuth", "Shadcn"],
    imageUrl: Devflow,
    link: "https://github.com/rohitbisht01/heart-match",
  },
  // {
  //   title: "Quick Cart",
  //   description:
  //     "Grocery app featuring seamless shopping, secure authentication, and efficient media management.",
  //   tags: [
  //     "ReactJs",
  //     "RTK",
  //     "MongoDB",
  //     "NodeJS",
  //     "Express",
  //     "JWT",
  //     "Cloudinary",
  //     "Tailwind CSS",
  //     "Stripe",
  //     "Resend",
  //   ],
  //   imageUrl: Devflow,
  //   link: "https://dev-overflow-bice.vercel.app/",
  // },
  // {
  //   title: "Blogify",
  //   description:
  //     "Blogify is a dynamic blogging platform built with the MERN stack, enabling users to easily write, publish, and engage with content.",
  //   tags: [
  //     "ReactJs",
  //     "RTK",
  //     "MongoDB",
  //     "NodeJS",
  //     "Express",
  //     "JWT",
  //     "Cloudinary",
  //     "Tailwind CSS",
  //   ],
  //   imageUrl: blogifyImg,
  //   link: "https://blogify-jfwc.onrender.com/",
  // },
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
