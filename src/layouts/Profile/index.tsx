import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProfileViewContainer from "components/ProfileViewContainer";
import ProjectListContainer from "components/ProjectListContainer";
import { ProfileQueryModel } from "models/User";

type ProfileLayoutProps = ProfileQueryModel & HTMLAttributes<HTMLElement>;

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  username,
}: ProfileQueryModel) => (
  <>
    <Link to="/">Home</Link>
    <ProfileViewContainer username={username} />
    <ProjectListContainer username={username} />
  </>
);

export default ProfileLayout;
