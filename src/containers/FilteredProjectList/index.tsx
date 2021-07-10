import React, { ReactElement, HTMLAttributes } from "react";

import ProjectList from "components/ProjectList";
import ProjectModel from "models/Project";

interface FilteredProjectListProps extends HTMLAttributes<HTMLElement> {
  projects: ProjectModel[];
  tagFilter: number;
}

const FilteredProjectList = ({
  projects,
  tagFilter,
  ...rest
}: FilteredProjectListProps): ReactElement => {
  return tagFilter === 0 ? (
    <ProjectList projects={projects} {...rest} />
  ) : (
    <ProjectList
      projects={projects.filter(p => p.tagFlags & tagFilter)}
      {...rest}
    />
  );
};

export default FilteredProjectList;
