import React, { HTMLAttributes } from "react";

import ProjectList from "components/ProjectList";
import { ProfileModel } from "models/User";

type ProfileProps = ProfileModel & HTMLAttributes<HTMLElement>;

const ProfileView: React.FC<ProfileProps> = ({
  profilePicture,
  username,
  displayName,
  bio,
  contactEmail,
  contactNumber,
  projects,
  className,
  ...rest
}: ProfileProps) => (
  <div className={`profile ${className || ""}`} {...rest}>
    <img alt={profilePicture.name} src={profilePicture.url} />
    <h1>{displayName}</h1>
    <p>{bio}</p>
    <p>{contactEmail}</p>
    <p>{contactNumber}</p>
    <ProjectList username={username} projects={projects} />
  </div>
);

export default ProfileView;
