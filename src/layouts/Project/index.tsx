import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import ProjectView from "components/ProjectView";
import ProjectModel from "models/Project";
import ProjectRowModel from "models/ProjectRow";
import { ProfileModel } from "models/User";

interface ProjectLayoutProps {
  project: ProjectModel;
  authorProfile: ProfileModel | undefined;
  rows: ProjectRowModel[] | undefined;
}

const ProjectLayout = ({
  project,
  authorProfile,
  rows,
}: ProjectLayoutProps): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <ProjectView {...project} authorProfile={authorProfile} rows={rows} />
  </>
);

export default ProjectLayout;
