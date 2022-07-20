import React, { ReactElement, HTMLAttributes } from "react";

import ListView from "components/ListView";
import ProjectModel from "models/Project";

import ProjectListRow from "./_ProjectListRow";

interface ProjectListProps extends HTMLAttributes<HTMLElement> {
  projects: ProjectModel[];
  predicate?: (p: ProjectModel) => boolean;
}

const ProjectList = ({
  projects,
  predicate,
  ...rest
}: ProjectListProps): ReactElement => (
  <ListView
    items={projects}
    getItemKey={project => project.title}
    onRenderRow={ProjectListRow}
    predicate={predicate}
    {...rest}
  />
);

ProjectList.defaultProps = {
  predicate: undefined,
};

export default ProjectList;
