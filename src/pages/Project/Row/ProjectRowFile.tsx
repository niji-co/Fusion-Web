import React, { HTMLAttributes } from "react";
import ProjectRowFileModel from "./models/ProjectRowFileModel";

interface ProjectRowFileProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowFileModel;
}

const ProjectRowFile: React.FC<ProjectRowFileProps> = ({
  model,
  className,
  ...rest
}: ProjectRowFileProps) => (
  <div className={`project-row-file ${className || ""}`} {...rest}>
    <p>#TODO CREATE FILE COMPONENT for &quot{model.asset.name}&quot</p>
    <a href={model.asset.url}>{model.asset.name}</a>
  </div>
);

export default ProjectRowFile;
