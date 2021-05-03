import React, { HTMLAttributes } from "react";
import ProjectRowVideoModel from "./models/ProjectRowVideoModel";

interface ProjectRowVideoProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowVideoModel;
}

const ProjectRowVideo: React.FC<ProjectRowVideoProps> = ({
  model,
  ...rest
}: ProjectRowVideoProps) => (
  <div key={model.id} className="project-row-video">
    <p>#TODO CREATE VIDEO COMPONENT for &quot{model.asset.name}&quot</p>
  </div>
);

export default ProjectRowVideo;
