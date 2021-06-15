import React from "react";
import { useParams } from "react-router-dom";

import ProjectLayout from "layouts/Project";
import { ProjectQueryModel } from "models/Project";

const Project: React.FC = () => {
  const params = useParams<ProjectQueryModel>();
  return <ProjectLayout {...params} />;
};

export default Project;
