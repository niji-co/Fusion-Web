import React from "react";
import { useParams } from "react-router-dom";

import ProjectLayout from "layouts/Project";
import { ProjectQueryModel } from "models/Project";

const Project: React.FC = () => {
  const { authorUsername, projectTitle } = useParams<ProjectQueryModel>();
  return (
    <ProjectLayout
      authorUsername={authorUsername}
      projectTitle={projectTitle}
    />
  );
};

export default Project;
