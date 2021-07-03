import React, { HTMLAttributes } from "react";

import Tag from "components/Tag";
import TagModel from "models/Tag";

interface TagListProps extends HTMLAttributes<HTMLElement> {
  tags: TagModel[];
  currentFilter?: number;
}

const TagList: React.FC<TagListProps> = ({
  tags,
  currentFilter,
  ...rest
}: TagListProps) => (
  <ul {...rest}>
    {tags.map(tag => (
      <Tag
        flag={tag.flag}
        name={tag.name}
        username={tag.username}
        currentFilter={currentFilter || 0}
        key={tag.name}
      />
    ))}
  </ul>
);

TagList.defaultProps = {
  currentFilter: 0,
};

export default TagList;
