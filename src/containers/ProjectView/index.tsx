import React, { HTMLAttributes } from "react";

import ProjectView from "components/ProjectView";
import useProfileWithUsername from "hooks/useProfileWithUsername";
import useProject from "hooks/useProject";
import useProjectRows from "hooks/useProjectRows";
import { ProjectQueryModel } from "models/Project";

type ProjectViewProps = ProjectQueryModel & HTMLAttributes<HTMLElement>;

const ProjectViewContainer: React.FC<ProjectViewProps> = ({
  authorUsername,
  projectTitle,
  ...rest
}: ProjectViewProps) => {
  const profile = useProfileWithUsername(authorUsername);
  const project = useProject(authorUsername, projectTitle);
  const rows = useProjectRows(authorUsername, projectTitle);

  return project === undefined ? (
    <h1>Loading</h1>
  ) : (
    <ProjectView {...project} authorProfile={profile} rows={rows} {...rest} />
  );
};

export default ProjectViewContainer;
