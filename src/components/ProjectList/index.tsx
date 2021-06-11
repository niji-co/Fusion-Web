import React, { HTMLAttributes } from "react";

import ProjectListItem from "./ProjectListItem";

interface ProjectListProps extends HTMLAttributes<HTMLElement> {
  username: string;
  projects: string[];
}

const ProjectList: React.FC<ProjectListProps> = ({
  username,
  projects,
  className,
  ...rest
}: ProjectListProps) => (
  <div className={`user-projects-list ${className || ""}`} {...rest}>
    <ul>
      {projects.map(project => (
        <ProjectListItem key={project} username={username} title={project} />
      ))}
    </ul>
  </div>
);

export default ProjectList;
export { ProjectListItem };
