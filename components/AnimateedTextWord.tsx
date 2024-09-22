"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedTextWord = ({
  children,
  className = "",
}: {
  children: React.ReactNode; // Allow any React node
  className?: string;
}) => {
  const words = React.Children.toArray(children)
    .map((child) => {
      // If child is a text node, split it into words
      if (typeof child === "string") {
        return child.split(" ");
      }
      return [child]; // If it's not a string, wrap it in an array
    })
    .flat();

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "inherit" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
          className={className}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
