import React, { ReactElement, HTMLAttributes } from "react";

import TagList from "components/TagList";
import { ProjectFilterModel } from "models/Project";
import { ProfileModel } from "models/User";

type UserTagListProps = ProjectFilterModel & {
  username: string;
  profile: ProfileModel;
} & HTMLAttributes<HTMLElement>;

const UserTagList = ({
  tags,
  username,
  profile,
  ...rest
}: UserTagListProps): ReactElement => {
  const tagObjects = profile.tags.map((t, i) => ({
    flag: 1 << i,
    name: t,
    username,
  }));

  return <TagList tags={tagObjects} currentFilter={tags} {...rest} />;
};

export default UserTagList;
