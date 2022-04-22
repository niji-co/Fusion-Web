import React, { ReactElement, HTMLAttributes } from "react";

import { ProjectRowAssetModel } from "models/ProjectRow";

interface ProjectRowVideoProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowAssetModel;
}

const ProjectRowVideo = ({
  model,
  className,
  ...rest
}: ProjectRowVideoProps): ReactElement => (
  <div className={`project-row-video ${className || ""}`} {...rest}>
    <p>#TODO CREATE VIDEO COMPONENT for &quot{model.asset.name}&quot</p>
  </div>
);

export default ProjectRowVideo;
