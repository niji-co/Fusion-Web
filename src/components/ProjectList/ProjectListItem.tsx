import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ProjectListItemProps extends HTMLAttributes<HTMLElement> {
  username: string;
  title: string;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  username,
  title,
  ...rest
}: ProjectListItemProps) => (
  <li {...rest}>
    <Link to={`${username}/${title}`}>{title}</Link>
  </li>
);

export default ProjectListItem;
