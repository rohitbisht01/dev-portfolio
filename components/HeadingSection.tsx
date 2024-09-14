import Image from "next/image";
import ProfileIcon from "@/public/Profile.jpeg";
import Link from "next/link";
import { TechStackSection } from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { SiGmail } from "react-icons/si";
import { PiReadCvLogo } from "react-icons/pi";
import WorkExperienceSection from "./WorkExperienceSection";

export default function HeadingSection() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <Image
          src={ProfileIcon}
          alt="my-image"
          width={70}
          height={70}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-blue-600">
            Rohit Singh Bisht
          </h1>
          <p className="italic text-slate-600">
            Full Stack Developer / Software Engineer
          </p>
          <SocialLinks />
        </div>
      </div>

      <AboutSection />
      <TechStackSection />
      <WorkExperienceSection />
      <ProjectsSection />
    </div>
  );
}

const socialLinkItems = [
  {
    label: "@github",
    href: "https://github.com/rohitbisht01",
    bgColor: "hover:text-gray-900",
    color: "text-gray-800",
    icon: FaGithub,
  },
  {
    label: "@linkedln",
    href: "https://www.linkedin.com/in/rohitbisht01/",
    bgColor: "hover:text-blue-800",
    color: "text-blue-700",
    icon: BsLinkedin,
  },
  {
    label: "@twitter",
    href: "https://x.com/rohit__bisht_",
    bgColor: "hover:text-sky-600",
    color: "text-sky-500",
    icon: BsTwitter,
  },
  {
    label: "@gmail",
    href: "mailto:rohitsinghbisht124@gmail.com",
    bgColor: "hover:text-red-600",
    color: "text-red-500",
    icon: SiGmail,
  },
  {
    label: "@cv",
    href: "/rohit-singh-bisht-cv.pdf",
    bgColor: "hover:text-black-600",
    color: "text-black-500",
    icon: PiReadCvLogo,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2 mt-2">
      {socialLinkItems.map((item) => {
        const icon = React.createElement(item.icon, {
          className: `w-4 h-4 ${item.color}`,
        });

        return (
          <div className="relative group" key={item.label}>
            {item.label === "@cv" ? (
              <a
                href={item.href}
                download
                target="_blank"
                className={`text-slate-700 p-1 rounded-md flex items-center ${item.bgColor}`}
              >
                {icon}
              </a>
            ) : (
              <Link
                href={item.href}
                target="_blank"
                className={`text-slate-700 p-1 rounded-md flex items-center ${item.bgColor}`}
              >
                {icon}
              </Link>
            )}
            {/* Tooltip */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 bg-gray-800 text-white text-sm py-1 px-2 rounded-md shadow-lg">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="flex flex-col text-lg py-8">
      <div>
        Hi, I&apos;m a{" "}
        <span className="text-blue-600 font-bold">Fullstack developer</span>{" "}
        based in Uttarakhand, India, who enjoys building web applications that
        provide seamless user experiences.
        <div className="mt-2">
          Currently, I work with modern technologies like
          <span className="ml-2 px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded-xl italic">
            NextJs
          </span>{" "}
          <span className="ml-2 px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded-xl italic">
            Typescript
          </span>{" "}
          <span className="ml-2 mr-2 px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded-xl italic">
            PostgreSQL
          </span>{" "}
          allowing me to create both front-end and back-end solutions.
        </div>
        <p className="italic mt-2">
          Outside of coding, I&apos;m a huge anime fan and currently hooked on{" "}
          <span className="font-bold text-blue-500 ">One Piece</span>.
        </p>
      </div>
    </div>
  );
};
