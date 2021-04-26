import React from "react";
import ProjectProps from "./models/ProjectProps";

import ProjectRow from "./Row";

import "./style.css";

const ProjectPreviewLayout: React.FC<ProjectProps> = ({
  title,
  tags,
  rows,
}: ProjectProps) => (
  <div className="project">
    <h1>{title}</h1>
    {tags.map(tag => (
      <span key={tag}>{tag}</span>
    ))}
    {rows.map(ProjectRow)}
  </div>
);

export default ProjectPreviewLayout;
