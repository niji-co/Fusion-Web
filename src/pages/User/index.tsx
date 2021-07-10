import React, { ReactElement } from "react";
import { useParams, useLocation } from "react-router-dom";

import useProfileWithUsername from "hooks/useProfileWithUsername";
import useUserProjects from "hooks/useUserProjects";
import UserLayout from "layouts/User";
import { ProfileQueryModel } from "models/User";

const User = (): ReactElement => {
  const { username } = useParams<ProfileQueryModel>();
  const query = new URLSearchParams(useLocation().search);
  const tagFlags = parseInt(query.get("tags") || "0", 10);

  const profile = useProfileWithUsername(username);
  const projects = useUserProjects(username);

  if (profile === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <UserLayout
      username={username}
      profile={profile}
      tagFlags={tagFlags}
      projects={projects || []}
    />
  );
};

export default User;
