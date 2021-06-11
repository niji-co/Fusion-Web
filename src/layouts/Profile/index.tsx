import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProfileLoader from "components/ProfileLoader";
import { ProfileQueryModel } from "models/User";

type ProfileLayoutProps = ProfileQueryModel & HTMLAttributes<HTMLElement>;

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  username,
}: ProfileQueryModel) => (
  <>
    <Link to="/">Home</Link>
    <ProfileLoader username={username} />
  </>
);

export default ProfileLayout;
