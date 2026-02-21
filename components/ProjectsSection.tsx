import { projectsData } from "@/utils";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="">
        {projectsData.map((project) => {
          return <ProjectCard key={project.link} project={project} />;
        })}
    </div>
  );
}
