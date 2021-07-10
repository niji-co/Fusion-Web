import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import ProfileView from "components/ProfileView";
import FilteredProjectList from "containers/FilteredProjectList";
import UserTagList from "containers/UserTagList";
import ProjectModel from "models/Project";
import { ProfileModel } from "models/User";

interface UserLayoutProps {
  username: string;
  profile: ProfileModel;
  tags: number;
  projects: ProjectModel[];
}

const UserLayout = ({
  username,
  profile,
  tags,
  projects,
}: UserLayoutProps): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <ProfileView {...profile} />
    <UserTagList tags={tags} username={username} profile={profile} />
    <FilteredProjectList projects={projects} tags={tags} />
  </>
);

export default UserLayout;
