import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import ProjectHeader from "components/ProjectHeader";
import ProjectRowList from "components/ProjectRowList";
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
    <ProjectHeader {...project} authorProfile={authorProfile} />
    <ProjectRowList rows={rows} />
  </>
);

export default ProjectLayout;
