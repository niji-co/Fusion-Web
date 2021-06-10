import React, { Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProfileLoader from "components/ProfileLoader";
import { ProfileQueryModel } from "models/User";

const ProjectLayout: React.FC<ProfileQueryModel> = ({
  username,
}: ProfileQueryModel) => (
  <>
    <Link to="/">Home</Link>
    <ProfileLoader username={username} />
  </>
);

export default ProjectLayout;
