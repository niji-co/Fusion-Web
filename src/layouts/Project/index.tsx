import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProjectViewContainer from "components/ProjectViewContainer";
import { ProjectQueryModel } from "models/Project";

type ProjectLayoutProps = ProjectQueryModel & HTMLAttributes<HTMLElement>;

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  author,
  title,
}: ProjectLayoutProps) => (
  <>
    <Link to="/">Home</Link>
    <ProjectViewContainer author={author} title={title} />
  </>
);

export default ProjectLayout;
