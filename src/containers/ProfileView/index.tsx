import React from "react";

import ProfileView from "components/ProfileView";
import useProfileWithUsername from "hooks/Profile";
import { ProfileQueryModel } from "models/User";

const ProfileViewContainer: React.FC<ProfileQueryModel> = ({
  username,
}: ProfileQueryModel) => {
  const profile = useProfileWithUsername(username);

  return profile === undefined ? (
    <h1>Loading</h1>
  ) : (
    <ProfileView {...profile} />
  );
};

export default ProfileViewContainer;
