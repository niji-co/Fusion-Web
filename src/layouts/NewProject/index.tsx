import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import NewProjectContainer from "containers/NewProjectContainer";
import { ProfileModel } from "models/User";

interface NewProjecctLayoutProps {
  username: string;
  profile: ProfileModel;
}

const NewProjectLayout = ({
  username,
  profile,
}: NewProjecctLayoutProps): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <NewProjectContainer username={username} profile={profile} />
  </>
);

export default NewProjectLayout;
