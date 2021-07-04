import React, { useState, useEffect } from "react";

import projectAPI from "api/fakeProjectAPI";
import userAPI from "api/fakeUserAPI";
import ProjectView from "components/ProjectView";
import ProjectModel, { ProjectQueryModel } from "models/Project";
import ProjectRowModel from "models/ProjectRow";
import { ProfileModel } from "models/User";

const ProjectViewContainer: React.FC<ProjectQueryModel> = ({
  authorUsername,
  projectTitle,
}: ProjectQueryModel) => {
  const [profile, setProfile] = useState<ProfileModel>();
  const [project, setProject] = useState<ProjectModel>();
  const [rows, setRows] = useState<ProjectRowModel[]>();

  useEffect(() => {
    userAPI
      .fetchWithUsername(authorUsername)
      .then(setProfile)
      .catch(err => console.error("Error fetching profile", err));

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
