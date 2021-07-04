import React from "react";

import TagList from "components/TagList";
import useProfileWithUsername from "hooks/useProfileWithUsername";
import { ProjectFilterModel } from "models/Project";
import { ProfileQueryModel } from "models/User";

type ProfileListProps = ProfileQueryModel & ProjectFilterModel;

const TagListContainer: React.FC<ProfileListProps> = ({
  username,
  tags,
}: ProfileListProps) => {
  const profile = useProfileWithUsername(username);

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
