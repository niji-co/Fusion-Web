import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import { ProjectQueryModel } from "models/Project";
import ProjectLoader from "components/ProjectLoader";

type ProjectLayoutProps = ProjectQueryModel & HTMLAttributes<HTMLElement>;

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  title,
}: ProjectLayoutProps) => (
  <>
    <Link to="/">Home</Link>
    <ProjectLoader title={title} />
  </>
);

export default ProjectLayout;
