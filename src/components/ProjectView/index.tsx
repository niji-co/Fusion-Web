import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProjectRow from "components/ProjectRow";
import TagList from "components/TagList";
import ProjectModel from "models/Project";
import ProjectRowModel from "models/ProjectRow";

type ProjectProps = ProjectModel & {
  rows: ProjectRowModel[];
} & HTMLAttributes<HTMLElement>;

const ProjectView: React.FC<ProjectProps> = ({
  title,
  author,
  tags,
  thumbnail,
  rows,
  ...rest
}: ProjectProps) => (
  <div {...rest}>
    <img alt={thumbnail.name} src={thumbnail.url} />
    <h1>{title}</h1>
    <Link to={`/${author}`}>{author}</Link>
    <br />
    <TagList tags={tags} />
    {rows.map(row => (
      <ProjectRow key={row.id} model={row} />
    ))}
  </div>
);

export default ProjectView;
