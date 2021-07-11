import React, { ReactElement, HTMLAttributes } from "react";

import ProjectRowModel from "models/ProjectRow";

import ProjectRow from "./_ProjectRow";

interface ProjectRowListProps extends HTMLAttributes<HTMLElement> {
  rows: ProjectRowModel[] | undefined;
}

const ProjectRowList = ({
  rows,
  ...rest
}: ProjectRowListProps): ReactElement => (
  <div {...rest}>
    {rows?.map(row => (
      <ProjectRow key={row.id} model={row} />
    ))}
  </div>
);

export default ProjectRowList;
