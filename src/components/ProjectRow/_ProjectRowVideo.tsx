import React, { ReactElement, HTMLAttributes } from "react";

import { ProjectRowVideoModel } from "models/ProjectRow";

interface ProjectRowVideoProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowVideoModel;
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
