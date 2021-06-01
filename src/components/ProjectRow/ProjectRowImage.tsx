import React, { HTMLAttributes } from "react";
import ProjectRowImageModel from "./models/ProjectRowImageModel";

interface ProjectRowImageProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowImageModel;
}

const ProjectRowImage: React.FC<ProjectRowImageProps> = ({
  model,
  className,
  ...rest
}: ProjectRowImageProps) => (
  <div className={`project-row-image ${className || ""}`} {...rest}>
    <img alt={model.asset.name} src={model.asset.url} />
  </div>
);

export default ProjectRowImage;
