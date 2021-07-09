import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";

import useProfileWithUsername from "hooks/useProfileWithUsername";
import useProject from "hooks/useProject";
import useProjectRows from "hooks/useProjectRows";
import ProjectLayout from "layouts/Project";
import { ProjectQueryModel } from "models/Project";

const Project = (): ReactElement => {
  const { authorUsername, projectTitle } = useParams<ProjectQueryModel>();

  const profile = useProfileWithUsername(authorUsername);
  const project = useProject(authorUsername, projectTitle);
  const rows = useProjectRows(authorUsername, projectTitle);

  return project === undefined ? (
    <h1>Loading</h1>
  ) : (
    <ProjectLayout project={project} authorProfile={profile} rows={rows} />
  );
};

export default Project;
