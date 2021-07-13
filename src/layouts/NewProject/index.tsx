import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import EditProjectContainer from "containers/EditProjectContainer";
import ProjectModel from "models/Project";
import { ProfileModel } from "models/User";

interface NewProjecctLayoutProps {
  project: ProjectModel;
  setProject: (value: ProjectModel) => void;
  profile: ProfileModel;
}

const NewProjectLayout = ({
  project,
  setProject,
  profile,
}: NewProjecctLayoutProps): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <EditProjectContainer
      project={project}
      setProject={setProject}
      profile={profile}
    />
  </>
);

export default NewProjectLayout;
