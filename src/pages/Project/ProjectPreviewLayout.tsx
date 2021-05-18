import React, { Fragment, HTMLAttributes } from "react";
import Tag from "components/Tag";
import ProjectRow, { ProjectRowModel } from "./Row";
import "./style.css";

interface ProjectProps extends HTMLAttributes<HTMLElement> {
  title: string;
  tags: string[];
  rows: ProjectRowModel[];
}

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
