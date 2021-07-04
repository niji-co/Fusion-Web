import React, { useState, useEffect } from "react";

import projectAPI from "api/fakeProjectAPI";
import ProjectView from "components/ProjectView";
import useProfileWithUsername from "hooks/Profile";
import ProjectModel, { ProjectQueryModel } from "models/Project";
import ProjectRowModel from "models/ProjectRow";

const ProjectViewContainer: React.FC<ProjectQueryModel> = ({
  authorUsername,
  projectTitle,
}: ProjectQueryModel) => {
  const profile = useProfileWithUsername(authorUsername);
  const [project, setProject] = useState<ProjectModel>();
  const [rows, setRows] = useState<ProjectRowModel[]>();

  useEffect(() => {
    projectAPI
      .fetchProject(authorUsername, projectTitle)
      .then(setProject)
      .catch(err => console.error("Error fetching project", err));

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
