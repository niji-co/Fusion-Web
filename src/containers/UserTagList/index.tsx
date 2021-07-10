import React, { ReactElement, HTMLAttributes } from "react";

import TagList from "components/TagList";
import { ProfileModel } from "models/User";

interface UserTagListProps extends HTMLAttributes<HTMLElement> {
  tagFlags: number;
  username: string;
  profile: ProfileModel;
}

const UserTagList = ({
  tagFlags,
  username,
  profile,
  ...rest
}: UserTagListProps): ReactElement => {
  const tagObjects = profile.tags.map((t, i) => ({
    flag: 1 << i,
    name: t,
    username,
  }));

  return <TagList tags={tagObjects} currentFilter={tagFlags} {...rest} />;
};

export default UserTagList;
