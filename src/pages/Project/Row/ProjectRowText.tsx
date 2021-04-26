import React from "react";
import ProjectRowTextProps from "./models/ProjectRowTextProps";

const ProjectRowText: React.FC<ProjectRowTextProps> = ({
  id,
  content,
  style,
}: ProjectRowTextProps) => (
  <div key={id} className="project-row-text">
    <p>{content}</p>
  </div>
);

export default ProjectRowText;
