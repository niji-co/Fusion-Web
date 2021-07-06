import React, { HTMLAttributes } from "react";

import ProfileView from "components/ProfileView";
import useProfileWithUsername from "hooks/useProfileWithUsername";
import { ProfileQueryModel } from "models/User";

type ProfileViewProps = ProfileQueryModel & HTMLAttributes<HTMLElement>;

const ProfileViewContainer: React.FC<ProfileViewProps> = ({
  username,
  ...rest
}: ProfileViewProps) => {
  const profile = useProfileWithUsername(username);

  return profile === undefined ? (
    <h1>Loading</h1>
  ) : (
    <ProfileView {...profile} {...rest} />
  );
};

export default ProfileViewContainer;
