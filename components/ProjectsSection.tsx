import { projectsData } from "@/utils";
import { ProjectCard } from "./ProjectCard";
import { TextFade } from "./TextFade";

export default function ProjectsSection() {
  return (
    <TextFade direction="up">
      <div className="py-2">
        <h1 className="font-bold text-xl">Projects</h1>
        <div className="mt-4">
          {projectsData.map((project) => {
            return <ProjectCard key={project.link} project={project} />;
          })}
        </div>
      </div>
    </TextFade>
  );
}
