import React, { useState, useEffect } from "react";

import api from "api/fakeProjectAPI";
import ProjectList from "components/ProjectList";
import ProjectModel, { ProjectFilterModel } from "models/Project";
import { ProfileQueryModel } from "models/User";

type ProfileListProps = ProfileQueryModel & ProjectFilterModel;

const ProjectListLoader: React.FC<ProfileListProps> = ({
  username,
  tags,
}: ProfileListProps) => {
  const [projects, setProjects] = useState<ProjectModel[]>();

  useEffect(() => {
    api
      .fetchProjects(username)
      .then(setProjects)
      .catch(err => console.error("Error fetching projects", err));
  }, [username]);

  if (projects === undefined) {
    return <h1>Loading</h1>;
  }

  return tags === 0 ? (
    <ProjectList projects={projects} />
  ) : (
    <ProjectList projects={projects.filter(p => p.tagFlags & tags)} />
  );
};

export default ProjectListLoader;
