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
  tagFlags: number;
  projects: ProjectModel[];
}

const UserLayout = ({
  username,
  profile,
  tagFlags,
  projects,
}: UserLayoutProps): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <ProfileView {...profile} />
    <UserTagList tagFlags={tagFlags} username={username} profile={profile} />
    <FilteredProjectList projects={projects} tags={tagFlags} />
  </>
);

export default UserLayout;
