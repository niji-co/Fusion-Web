import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProjectModel from "models/Project";

type ProjectListItemProps = ProjectModel & HTMLAttributes<HTMLElement>;

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  author,
  title,
  thumbnail,
  ...rest
}: ProjectListItemProps) => (
  <li {...rest}>
    <Link to={`${author}/${title}`}>
      <div>
        <img alt={thumbnail.name} src={thumbnail.url} />
        <h1>{title}</h1>
      </div>
    </Link>
  </li>
);

export default ProjectListItem;
