import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../data";
import styles from "./../styles/style.module.css";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className={`${styles.scrollContainer} max-h-96 overflow-y-scroll`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
