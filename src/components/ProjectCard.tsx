import Image from "next/image";
import React, { FunctionComponent } from "react";
import { IProject } from "../../type";
import { FaGithubSquare } from "react-icons/fa";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-2 dark:text-black">
        {project.name}
      </h2>
      <Image
        src={project.image_path}
        alt={project.name}
        layout="responsive"
        width={300}
        height={200}
      />
      <p className="text-gray-600 my-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-sm">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 py-1 px-2 rounded dark:bg-gray-800 dark:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href={project.frond_end_url}
          className="text-black hover:underline bg-blue-300 dark:bg-blue-950 dark:text-white my-2 rounded-lg px-2 flex items-center gap-2"
        >
          <FaGithubSquare />
          Frontend
        </a>
        <a
          href={project.back_end_url}
          className="text-black hover:underline bg-blue-300 dark:bg-blue-950 dark:text-white my-2 py-2 rounded-lg px-2 flex items-center gap-2"
        >
          <FaGithubSquare />
          Backend
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
