"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navigationLinks = [
  {
    label: "About",
    href: "/",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-end items-center mb-4 text-lg">
      <div className="">
        <div className="flex gap-4 items-center">
          {navigationLinks.map((link) => {
            const isActive = link.href === pathname;
            return (
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  isActive ? "text-blue-700 font-semibold" : ""
                } hover:text-blue-700 hover:font-semibold hover:underline transition-all duration-200`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mx-8 text-base">
        <a
          href="/rohit-singh-bisht-cv.pdf"
          download
          target="_blank"
          className="px-4 py-2 border-2 border-gray-400 rounded-md 
                     bg-blue-500 text-white font-medium 
                     transition-all duration-200 
                     hover:bg-blue-600 active:bg-blue-700"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
