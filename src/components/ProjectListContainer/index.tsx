import React, { useState } from "react";

import api from "api/fakeProjectAPI";
import ProjectList from "components/ProjectList";
import ProjectModel from "models/Project";
import { ProfileQueryModel } from "models/User";

const ProjectListLoader: React.FC<ProfileQueryModel> = ({
  username,
}: ProfileQueryModel) => {
  const [projects, setProjects] = useState<ProjectModel[]>();

  if (projects === undefined) {
    const fetchProjects = api.fetchProjects(username);
    fetchProjects
      .then(setProjects)
      .catch(err => console.log("Error fetching projects", err));

    return <h1>Loading</h1>;
  }

  return <ProjectList projects={projects} />;
};

export default ProjectListLoader;
