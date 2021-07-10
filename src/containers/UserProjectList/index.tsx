import React, { ReactElement, HTMLAttributes } from "react";

import ProjectList from "components/ProjectList";
import ProjectModel from "models/Project";

interface UserProjectListProps extends HTMLAttributes<HTMLElement> {
  projects: ProjectModel[];
  tagFilter: number;
}

const UserProjectList = ({
  projects,
  tagFilter,
  ...rest
}: UserProjectListProps): ReactElement => {
  return tagFilter === 0 ? (
    <ProjectList projects={projects} {...rest} />
  ) : (
    <ProjectList
      projects={projects}
      predicate={p => (p.tagFlags & tagFilter) !== 0}
      {...rest}
    />
  );
};

export default UserProjectList;
