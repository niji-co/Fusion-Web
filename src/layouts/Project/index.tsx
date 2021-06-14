import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProjectViewContainer from "components/ProjectViewContainer";
import { ProjectQueryModel } from "models/Project";

type ProjectLayoutProps = ProjectQueryModel & HTMLAttributes<HTMLElement>;

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  authorUsername,
  projectTitle,
}: ProjectLayoutProps) => (
  <>
    <Link to="/">Home</Link>
    <ProjectViewContainer
      authorUsername={authorUsername}
      projectTitle={projectTitle}
    />
  </>
);

export default ProjectLayout;
