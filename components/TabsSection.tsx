"use client";

import { useState } from "react";
import ProjectsSection from "./ProjectsSection";
import BlogSection from "./BlogSection";
import { TextFade } from "./TextFade";

type TabType = "projects" | "blog";

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  return (
    <TextFade direction="up">
      <div className="mt-6">
        <div className="flex gap-4 border-b border-gray-300 mb-4">
          <button
            onClick={() => setActiveTab("projects")}
            className={`pb-2 px-1 font-semibold transition-all duration-200 ${
              activeTab === "projects"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`pb-2 px-1 font-semibold transition-all duration-200 ${
              activeTab === "blog"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Blog
          </button>
        </div>

        <div className="">
          {activeTab === "projects" ? (
            <div>
              <ProjectsSection />
            </div>
          ) : (
            <div>
              <BlogSection />
            </div>
          )}
        </div>
      </div>
    </TextFade>
  );
}

