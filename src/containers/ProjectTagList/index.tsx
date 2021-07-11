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
  const allTagNames = authorProfile?.tags || [];
  const allTags = allTagNames.map(
    (tag, index): TagModel => ({
      flag: 1 << index,
      name: tag,
      username: author,
    })
  );
  const filteredTags = allTags.filter(t => t.flag & tagFlags);

  return <TagList tags={filteredTags} {...rest} />;
};

export default ProjectTagList;
