import React, { useState } from "react";

import projectAPI from "api/fakeProjectAPI";
import userAPI from "api/fakeUserAPI";
import ProjectView from "components/ProjectView";
import ProjectModel, { ProjectQueryModel } from "models/Project";
import ProjectRowModel from "models/ProjectRow";
import { ProfileModel } from "models/User";

const ProjectViewContainer: React.FC<ProjectQueryModel> = ({
  author,
  title,
}: ProjectQueryModel) => {
  const [profile, setProfile] = useState<ProfileModel>();
  const [project, setProject] = useState<ProjectModel>();
  const [rows, setRows] = useState<ProjectRowModel[]>();

  if (profile === undefined) {
    const fetchProfile = userAPI.fetchWithUsername(author);
    fetchProfile
      .then(setProfile)
      .catch(err => console.log("Error fetching profile", err));
  }

  if (project === undefined) {
    const fetchProject = projectAPI.fetchProject(author, title);
    fetchProject
      .then(setProject)
      .catch(err => console.log("Error fetching project", err));

    return <h1>Loading</h1>;
  }

  if (rows === undefined) {
    const fetchRows = projectAPI.fetchProjectRows(author, title);
    fetchRows
      .then(setRows)
      .catch(err => console.log("Error fetching project rows", err));
  }

  return <ProjectView {...project} authorProfile={profile} rows={rows || []} />;
};

export default ProjectViewContainer;
