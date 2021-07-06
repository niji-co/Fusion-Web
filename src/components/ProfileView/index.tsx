import React, { ReactElement, HTMLAttributes } from "react";

import { ProfileModel } from "models/User";

type ProfileProps = ProfileModel & HTMLAttributes<HTMLElement>;

const ProfileView = ({
  profilePicture,
  displayName,
  bio,
  contactEmail,
  contactNumber,
  className,
  ...rest
}: ProfileProps): ReactElement => (
  <div className={`profile ${className || ""}`} {...rest}>
    <img alt={profilePicture.name} src={profilePicture.url} />
    <h1>{displayName}</h1>
    <p>{bio}</p>
    <p>{contactEmail}</p>
    <p>{contactNumber}</p>
  </div>
);

export default ProfileView;
