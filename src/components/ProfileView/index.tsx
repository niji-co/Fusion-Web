import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import { ProfileModel } from "models/User";

type ProfileProps = ProfileModel & HTMLAttributes<HTMLElement>;

const ProfileView: React.FC<ProfileProps> = ({
  profilePicture,
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
    {projects.map(project => (
      <Fragment key={project}>
        <Link to={`/projects/${project}`}>{project}</Link>
        <br />
      </Fragment>
    ))}
  </div>
);

export default ProfileView;
