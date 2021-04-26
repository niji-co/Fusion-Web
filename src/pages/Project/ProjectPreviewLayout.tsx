import React from "react";
import ProjectProps from "./models/ProjectProps";

import "./style.css";

const ProjectPreviewLayout: React.FC<ProjectProps> = ({
  title,
  tags,
}: ProjectProps) => (
  <div className="project">
    <h1>{title}</h1>
    {tags.map(tag => (
      <span key={tag}>{tag}</span>
    ))}
  </div>
);

export default ProjectPreviewLayout;
