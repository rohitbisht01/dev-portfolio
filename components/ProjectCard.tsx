"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  link: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

interface ProjectCardProps {
  project: ProjectProps;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { link, title, description, tags, imageUrl } = project;

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-4 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8">
        <Link href={link} target="_blank">
          <div className="pt-4 pb-7 px-5 sm:pl-5 sm:pr-2 sm:pt-5 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
            <p className="mt-2 leading-relaxed ">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag: string, index: number) => (
                <li
                  className="px-2 py-1 uppercase tracking-wider text-sm text-blue-600 bg-blue-100 rounded-xl italic"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* <Link href={link} target="_blank"> */}
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
          />
          {/* </Link> */}
        </Link>
      </section>
    </motion.div>
  );
};
