import React, { Fragment, HTMLAttributes } from "react";
import AssetModel from "models/Asset";
import ProjectRowModel from "models/ProjectRow";
import Tag from "components/Tag";
import ProjectRow from "components/ProjectRow";

interface ProjectProps extends HTMLAttributes<HTMLElement> {
  title: string;
  tags: string[];
  thumbnail: AssetModel;
  rows: ProjectRowModel[];
}

const ProjectPreviewLayout: React.FC<ProjectProps> = ({
  title,
  tags,
  thumbnail,
  rows,
}: ProjectProps) => (
  <div className="project">
    <img alt={thumbnail.name} src={thumbnail.url} />
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
