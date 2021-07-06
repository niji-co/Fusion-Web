import React, { HTMLAttributes } from "react";

import ProjectList from "components/ProjectList";
import useUserProjects from "hooks/useUserProjects";
import { ProjectFilterModel } from "models/Project";
import { ProfileQueryModel } from "models/User";

type ProfileListProps = ProfileQueryModel &
  ProjectFilterModel &
  HTMLAttributes<HTMLElement>;

const ProjectListContainer: React.FC<ProfileListProps> = ({
  username,
  tags,
  ...rest
}: ProfileListProps) => {
  const projects = useUserProjects(username);

  if (projects === undefined) {
    return <h1>Loading</h1>;
  }

  return tags === 0 ? (
    <ProjectList projects={projects} {...rest} />
  ) : (
    <ProjectList projects={projects.filter(p => p.tagFlags & tags)} {...rest} />
  );
};

export default ProjectListContainer;
