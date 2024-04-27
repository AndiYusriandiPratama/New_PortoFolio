import React from "react";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences, skills } from "../../data";
import styles from "./../styles/style.module.css";
import SkillCard from "@/components/SkillCard";

const Resume = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-2 bg-white rounded-lg shadow-sm dark:bg-black">
        {/* educati/experience */}
        <h1 className="text-3xl font-bold mb-4">Education & Experience</h1>
        <div className={`${styles.scrollContainer} max-h-96 overflow-y-scroll`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experiences.map((experience, index) => (
              <div key={index}>
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="my-5 bg-white rounded-lg shadow-lg mt-5 dark:bg-black">
        <h1 className="text-3xl font-bold mx-3 py-2">Skills</h1>
        <div className="flex justify-center flex-wrap gap-4 mt-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
