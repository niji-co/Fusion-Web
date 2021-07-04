import React from "react";

import ProjectList from "components/ProjectList";
import useUserProjects from "hooks/useUserProjects";
import { ProjectFilterModel } from "models/Project";
import { ProfileQueryModel } from "models/User";

type ProfileListProps = ProfileQueryModel & ProjectFilterModel;

const ProjectListContainer: React.FC<ProfileListProps> = ({
  username,
  tags,
}: ProfileListProps) => {
  const projects = useUserProjects(username);

  if (projects === undefined) {
    return <h1>Loading</h1>;
  }

  return tags === 0 ? (
    <ProjectList projects={projects} />
  ) : (
    <ProjectList projects={projects.filter(p => p.tagFlags & tags)} />
  );
};

export default ProjectListContainer;
