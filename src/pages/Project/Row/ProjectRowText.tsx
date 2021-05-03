import React, { HTMLAttributes } from "react";
import ProjectRowTextModel from "./models/ProjectRowTextModel";

interface ProjectRowTextProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowTextModel;
}

const ProjectRowText: React.FC<ProjectRowTextProps> = ({
  model,
  className,
  ...rest
}: ProjectRowTextProps) => (
  <div className={`project-row-text ${className || ""}`} {...rest}>
    <p>{model.content}</p>
  </div>
);

export default ProjectRowText;
