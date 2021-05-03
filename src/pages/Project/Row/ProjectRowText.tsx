import React, { HTMLAttributes } from "react";
import ProjectRowTextModel from "./models/ProjectRowTextModel";

interface ProjectRowTextProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowTextModel;
}

const ProjectRowText: React.FC<ProjectRowTextProps> = ({
  model,
  ...rest
}: ProjectRowTextProps) => (
  <div key={model.id} className="project-row-text">
    <p>{model.content}</p>
  </div>
);

export default ProjectRowText;
