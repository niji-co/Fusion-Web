import React, { Fragment, HTMLAttributes } from "react";

import ProjectRow from "components/ProjectRow";
import Tag from "components/Tag";
import ProjectModel from "models/Project";

type ProjectProps = ProjectModel & HTMLAttributes<HTMLElement>;

const ProjectView: React.FC<ProjectProps> = ({
  title,
  author,
  tags,
  thumbnail,
  rows,
}: ProjectProps) => (
  <div className="project">
    <img alt={thumbnail.name} src={thumbnail.url} />
    <h1>{title}</h1>
    <a href={`#/profile/${author}`}>{author}</a>
    <br />
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

export default ProjectView;
