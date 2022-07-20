import React, { ReactElement, HTMLAttributes } from "react";

import TagList from "components/TagList";
import TagModel from "models/Tag";
import { ProfileModel } from "models/User";

interface ProjectTagListProps extends HTMLAttributes<HTMLElement> {
  author: string;
  tagFlags: number;
  authorProfile: ProfileModel | undefined;
}

const ProjectTagList = ({
  author,
  tagFlags,
  authorProfile,
  ...rest
}: ProjectTagListProps): ReactElement => {
  const tagObjects = authorProfile?.tags?.map(
    (tag, index): TagModel => ({
      flag: 1 << index,
      name: tag,
      username: author,
    })
  );

  return (
    <TagList
      tags={tagObjects ?? []}
      predicate={t => (t.flag & tagFlags) !== 0}
      {...rest}
    />
  );
};

export default ProjectTagList;
