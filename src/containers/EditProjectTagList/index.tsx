import React, { ReactElement, HTMLAttributes } from "react";

import EditTagList from "components/EditTagList";
import TagModel from "models/Tag";
import { ProfileModel } from "models/User";

interface ProjectTagListProps extends HTMLAttributes<HTMLElement> {
  author: string;
  tagFlags: number;
  authorProfile: ProfileModel | undefined;
  setTagFlags: (value: number) => void;
}

const ProjectTagList = ({
  author,
  tagFlags,
  authorProfile,
  setTagFlags,
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
    <EditTagList
      tags={tagObjects ?? []}
      currentFilter={tagFlags}
      setTagFlags={setTagFlags}
      {...rest}
    />
  );
};

export default ProjectTagList;
