import React, { useState, useEffect } from "react";

import api from "api/fakeUserAPI";
import TagList from "components/TagList";
import { ProjectFilterModel } from "models/Project";
import { ProfileModel, ProfileQueryModel } from "models/User";

type ProfileListProps = ProfileQueryModel & ProjectFilterModel;

const TagListContainer: React.FC<ProfileListProps> = ({
  username,
  tags,
}: ProfileListProps) => {
  const [profile, setProfile] = useState<ProfileModel>();

  useEffect(() => {
    api
      .fetchWithUsername(username)
      .then(setProfile)
      .catch(err => console.error("Error fetching profile", err));
  }, [username]);

  if (profile === undefined) {
    return <h1>Loading</h1>;
  }

  const tagObjects = profile.tags.map((t, i) => ({
    flag: 1 << i,
    name: t,
    username,
  }));

  return <TagList tags={tagObjects} currentFilter={tags} />;
};

export default TagListContainer;
