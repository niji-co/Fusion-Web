import React, { ReactElement, HTMLAttributes } from "react";

import ProjectList from "components/ProjectList";
import ProjectModel from "models/Project";

interface FilteredProjectListProps extends HTMLAttributes<HTMLElement> {
  projects: ProjectModel[];
  tags: number;
}

const FilteredProjectList = ({
  projects,
  tags,
  ...rest
}: FilteredProjectListProps): ReactElement => {
  return tags === 0 ? (
    <ProjectList projects={projects} {...rest} />
  ) : (
    <ProjectList projects={projects.filter(p => p.tagFlags & tags)} {...rest} />
  );
};

export default FilteredProjectList;
