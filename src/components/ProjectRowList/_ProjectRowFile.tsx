import React, { ReactElement, HTMLAttributes } from "react";

import { ProjectRowAssetModel } from "models/ProjectRow";

interface ProjectRowFileProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowAssetModel;
}

const ProjectRowFile = ({
  model,
  className,
  ...rest
}: ProjectRowFileProps): ReactElement => (
  <div className={`project-row-file ${className || ""}`} {...rest}>
    <p>#TODO CREATE FILE COMPONENT for &quot{model.asset.name}&quot</p>
    <a href={model.asset.url}>{model.asset.name}</a>
  </div>
);

export default ProjectRowFile;
