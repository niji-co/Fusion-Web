import React from "react";
import { Link } from "react-router-dom";

import ProjectViewContainer from "containers/ProjectView";
import { ProjectQueryModel } from "models/Project";

const ProjectLayout: React.FC<ProjectQueryModel> = ({
  authorUsername,
  projectTitle,
}: ProjectQueryModel) => (
  <>
    <Link to="/">Home</Link>
    <ProjectViewContainer
      authorUsername={authorUsername}
      projectTitle={projectTitle}
    />
  </>
);

export default ProjectLayout;
