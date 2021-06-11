import React, { HTMLAttributes } from "react";

import { ProfileModel } from "models/User";

type ProfileProps = ProfileModel & HTMLAttributes<HTMLElement>;

const ProfileView: React.FC<ProfileProps> = ({
  profilePicture,
  displayName,
  bio,
  contactEmail,
  contactNumber,
  className,
  ...rest
}: ProfileProps) => (
  <div className={`profile ${className || ""}`} {...rest}>
    <img alt={profilePicture.name} src={profilePicture.url} />
    <h1>{displayName}</h1>
    <p>{bio}</p>
    <p>{contactEmail}</p>
    <p>{contactNumber}</p>
  </div>
);

export default ProfileView;
