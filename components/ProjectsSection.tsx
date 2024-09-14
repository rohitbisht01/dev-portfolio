import { projectsData } from "@/utils";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="py-8">
      <h1 className="font-bold text-xl">Projects</h1>
      <div className="mt-4">
        {projectsData.map((project) => {
          return <ProjectCard key={project.link} project={project} />;
        })}
      </div>
    </div>
  );
}
