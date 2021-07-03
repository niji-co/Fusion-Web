import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProfileViewContainer from "components/ProfileViewContainer";
import ProjectListContainer from "components/ProjectListContainer";
import { ProjectFilterModel } from "models/Project";
import { ProfileQueryModel } from "models/User";

type ProfileLayoutProps = ProfileQueryModel & ProjectFilterModel;

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  username,
  tags,
}: ProfileLayoutProps) => (
  <>
    <Link to="/">Home</Link>
    <ProfileViewContainer username={username} />
    <ProjectListContainer username={username} tags={tags} />
  </>
);

export default ProfileLayout;
