import React from "react";
import ProjectRowTextProps from "./models/ProjectRowTextProps";

const ProjectRowText: React.FC<ProjectRowTextProps> = ({
  content,
  style,
}: ProjectRowTextProps) => (
  <div className="project-row-text">
    <p>{content}</p>
  </div>
);

export default ProjectRowText;
