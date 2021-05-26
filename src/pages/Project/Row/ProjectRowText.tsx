import React, { ReactElement, HTMLAttributes } from "react";
import ProjectRowTextModel, { TextStyle } from "./models/ProjectRowTextModel";

interface ProjectRowTextProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowTextModel;
}

const ProjectRowText: React.FC<ProjectRowTextProps> = ({
  model,
  className,
  ...rest
}: ProjectRowTextProps) => {
  let body: ReactElement;
  switch (model.style) {
    case TextStyle.h1:
      body = <h1>{model.content}</h1>;
      break;
    case TextStyle.h2:
      body = <h2>{model.content}</h2>;
      break;
    case TextStyle.h3:
      body = <h3>{model.content}</h3>;
      break;
    default:
      body = <p>{model.content}</p>;
      break;
  }

  return (
    <div className={`project-row-text ${className || ""}`} {...rest}>
      {body}
    </div>
  );
};

export default ProjectRowText;
