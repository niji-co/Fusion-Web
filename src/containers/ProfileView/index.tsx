import React, { ReactElement, HTMLAttributes } from "react";

import ProfileView from "components/ProfileView";
import useProfileWithUsername from "hooks/useProfileWithUsername";
import { ProfileQueryModel } from "models/User";

type ProfileViewProps = ProfileQueryModel & HTMLAttributes<HTMLElement>;

const ProfileViewContainer = ({
  username,
  ...rest
}: ProfileViewProps): ReactElement => {
  const profile = useProfileWithUsername(username);

  return profile === undefined ? (
    <h1>Loading</h1>
  ) : (
    <ProfileView {...profile} {...rest} />
  );
};

export default ProfileViewContainer;
