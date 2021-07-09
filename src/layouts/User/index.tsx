import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import ProfileViewContainer from "containers/ProfileView";
import ProjectListContainer from "containers/ProjectList";
import TagListContainer from "containers/TagList";
import { ProjectFilterModel } from "models/Project";
import { ProfileQueryModel } from "models/User";

const UserLayout = ({
  username,
  tags,
}: ProfileQueryModel & ProjectFilterModel): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <ProfileViewContainer username={username} />
    <TagListContainer username={username} tags={tags} />
    <ProjectListContainer username={username} tags={tags} />
  </>
);

export default UserLayout;
