import React, { ReactElement, HTMLAttributes } from "react";

import { ProjectRowAssetModel } from "models/ProjectRow";

interface ProjectRowImageProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowAssetModel;
}

const ProjectRowImage = ({
  model,
  className,
  ...rest
}: ProjectRowImageProps): ReactElement => (
  <div className={`project-row-image ${className || ""}`} {...rest}>
    <img alt={model.asset.name} src={model.asset.url} />
  </div>
);

export default ProjectRowImage;
