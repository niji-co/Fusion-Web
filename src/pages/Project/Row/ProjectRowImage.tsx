import React, { HTMLAttributes } from "react";
import ProjectRowImageModel from "./models/ProjectRowImageModel";

interface ProjectRowImageProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowImageModel;
}

const ProjectRowImage: React.FC<ProjectRowImageProps> = ({
  model,
  ...rest
}: ProjectRowImageProps) => (
  <div key={model.id} className="project-row-image">
    <img alt={model.asset.name} src={model.asset.url} />
  </div>
);

export default ProjectRowImage;
