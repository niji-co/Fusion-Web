import React, { ReactElement, HTMLAttributes } from "react";

import ProjectModel from "models/Project";

import ProjectListItem from "./ProjectListItem";

interface ProjectListProps extends HTMLAttributes<HTMLElement> {
  projects: ProjectModel[];
  predicate?: (p: ProjectModel) => boolean;
}

const ProjectList = ({
  projects,
  predicate,
  className,
  ...rest
}: ProjectListProps): ReactElement => {
  const list = predicate === undefined ? projects : projects.filter(predicate);

  return (
    <div className={`user-projects-list ${className || ""}`} {...rest}>
      <ul>
        {list.map(project => (
          <ProjectListItem key={project.title} {...project} />
        ))}
      </ul>
    </div>
  );
};

ProjectList.defaultProps = {
  predicate: undefined,
};

export default ProjectList;
export { ProjectListItem };
