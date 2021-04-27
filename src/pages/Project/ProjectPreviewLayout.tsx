import React, { Fragment } from "react";
import ProjectProps from "./models/ProjectProps";

import ProjectRow from "./Row";
import Tag from "../../components/Tag";

import "./style.css";

const ProjectPreviewLayout: React.FC<ProjectProps> = ({
  title,
  tags,
  rows,
}: ProjectProps) => (
  <div className="project">
    <h1>{title}</h1>
    {tags.map(tag => (
      <Fragment key={tag}>
        <Tag text={tag} />
      </Fragment>
    ))}
    {rows.map(ProjectRow)}
  </div>
);

export default ProjectPreviewLayout;
