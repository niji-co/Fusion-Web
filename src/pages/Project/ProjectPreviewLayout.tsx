import React, { Fragment } from "react";
import Tag from "components/Tag";
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
      <Fragment key={tag}>
        <Tag value={tag} />
      </Fragment>
    ))}
    {rows.map(row => (
      <ProjectRow key={row.id} model={row} />
    ))}
  </div>
);

export default ProjectPreviewLayout;
