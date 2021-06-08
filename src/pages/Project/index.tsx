import React from "react";
import { useParams } from "react-router-dom";

import { ProjectQueryModel } from "models/Project";
import ProjectLayout from "layouts/Project";

const Project: React.FC = () => {
  const { title } = useParams<ProjectQueryModel>();
  return <ProjectLayout title={title} />;
};

export default Project;
