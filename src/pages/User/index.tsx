import React, { ReactElement } from "react";
import { useParams, useLocation } from "react-router-dom";

import useProfileWithUsername from "hooks/useProfileWithUsername";
import useUserProjects from "hooks/useUserProjects";
import UserLayout from "layouts/User";
import { ProfileQueryModel } from "models/User";

const User = (): ReactElement => {
  const { username } = useParams<ProfileQueryModel>();
  const query = new URLSearchParams(useLocation().search);
  const tags = parseInt(query.get("tags") || "0", 10);

  const profile = useProfileWithUsername(username);
  const projects = useUserProjects(username);

  if (profile === undefined) {
    return <h1>Loading</h1>;
  }

  const tagObjects = profile.tags.map((t, i) => ({
    flag: 1 << i,
    name: t,
    username,
  }));

  const filteredProjects =
    tags === 0 ? projects : projects?.filter(p => p.tagFlags & tags);

  return (
    <UserLayout
      profile={profile}
      tagObjects={tagObjects}
      tags={tags}
      projects={filteredProjects || []}
    />
  );
};

export default User;
