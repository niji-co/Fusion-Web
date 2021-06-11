import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProjectModel from "models/Project";

type ProjectListItemProps = ProjectModel & HTMLAttributes<HTMLElement>;

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  author,
  title,
  ...rest
}: ProjectListItemProps) => (
  <li {...rest}>
    <Link to={`${author}/${title}`}>{title}</Link>
  </li>
);

export default ProjectListItem;
