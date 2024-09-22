import { workExperienceData } from "@/utils";
import Image from "next/image";
import { TextFade } from "./TextFade";

const WorkExperienceSection = () => {
  return (
    <TextFade direction="up">
      <div className="mt-8">
        <h1 className="font-bold text-xl">Work Experience</h1>
        <div className="py-4">
          {workExperienceData.map((experience, index) => {
            return (
              <div key={index} className="flex gap-3 pb-4">
                <Image
                  loading="lazy"
                  src={experience.companyLogo}
                  alt={experience.companyName}
                  width={60}
                  height={60}
                />
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="font-bold text-blue-600 text-lg">
                      {experience.companyName}
                    </h2>
                    <p className="text-sm text-slate-600">
                      {experience.period}
                    </p>
                  </div>
                  <p className="italic text-sm text-slate-600">
                    {experience.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </TextFade>
  );
};

export default WorkExperienceSection;
