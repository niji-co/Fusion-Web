import React, { useState, useEffect } from "react";

import api from "api/fakeProjectAPI";
import ProjectList from "components/ProjectList";
import ProjectModel from "models/Project";
import { ProfileQueryModel } from "models/User";

const ProjectListLoader: React.FC<ProfileQueryModel> = ({
  username,
}: ProfileQueryModel) => {
  const [projects, setProjects] = useState<ProjectModel[]>();

  useEffect(() => {
    api
      .fetchProjects(username)
      .then(setProjects)
      .catch(err => console.error("Error fetching projects", err));
  }, [username]);

  return projects === undefined ? (
    <h1>Loading</h1>
  ) : (
    <ProjectList projects={projects} />
  );
};

export default ProjectListLoader;
