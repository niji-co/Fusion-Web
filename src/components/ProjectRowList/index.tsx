import React, { ReactElement, HTMLAttributes } from "react";

import ListView from "components/ListView";
import ProjectRowModel from "models/ProjectRow";

import ProjectRow from "./_ProjectRow";

interface ProjectRowListProps extends HTMLAttributes<HTMLElement> {
  rows: ProjectRowModel[] | undefined;
}

const ProjectRowList = ({
  rows,
  ...rest
}: ProjectRowListProps): ReactElement => (
  <ListView
    items={rows}
    getItemKey={row => row.id}
    onRenderRow={model => <ProjectRow model={model} />}
    {...rest}
  />
);

export default ProjectRowList;
