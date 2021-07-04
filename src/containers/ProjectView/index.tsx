import React, { useState, useEffect } from "react";

import projectAPI from "api/fakeProjectAPI";
import ProjectView from "components/ProjectView";
import useProfileWithUsername from "hooks/useProfileWithUsername";
import useProject from "hooks/useProject";
import { ProjectQueryModel } from "models/Project";
import ProjectRowModel from "models/ProjectRow";

const ProjectViewContainer: React.FC<ProjectQueryModel> = ({
  authorUsername,
  projectTitle,
}: ProjectQueryModel) => {
  const profile = useProfileWithUsername(authorUsername);
  const project = useProject(authorUsername, projectTitle);
  const [rows, setRows] = useState<ProjectRowModel[]>();

  useEffect(() => {
    projectAPI
      .fetchProjectRows(authorUsername, projectTitle)
      .then(setRows)
      .catch(err => console.error("Error fetching project rows", err));
  }, [authorUsername, projectTitle]);

  return project === undefined ? (
    <h1>Loading</h1>
  ) : (
    <ProjectView {...project} authorProfile={profile} rows={rows} />
  );
};

export default ProjectViewContainer;
