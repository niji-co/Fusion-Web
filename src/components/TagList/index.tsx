import React, { ReactElement, HTMLAttributes } from "react";

import TagModel from "models/Tag";

import TagListItem from "./_TagListItem";

interface TagListProps extends HTMLAttributes<HTMLElement> {
  tags: TagModel[];
  currentFilter?: number;
}

const TagList = ({
  tags,
  currentFilter,
  ...rest
}: TagListProps): ReactElement => (
  <ul {...rest}>
    {tags.map(tag => (
      <TagListItem
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
