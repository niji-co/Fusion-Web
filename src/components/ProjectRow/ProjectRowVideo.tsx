import React, { HTMLAttributes } from "react";

import { ProjectRowVideoModel } from "models/ProjectRow";

interface ProjectRowVideoProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowVideoModel;
}

const ProjectRowVideo: React.FC<ProjectRowVideoProps> = ({
  model,
  className,
  ...rest
}: ProjectRowVideoProps) => (
  <div className={`project-row-video ${className || ""}`} {...rest}>
    <p>#TODO CREATE VIDEO COMPONENT for &quot{model.asset.name}&quot</p>
  </div>
);

export default ProjectRowVideo;
