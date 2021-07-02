import React, { HTMLAttributes } from "react";

import Tag from "components/Tag";

interface TagListProps extends HTMLAttributes<HTMLElement> {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags, ...rest }: TagListProps) => (
  <ul {...rest}>
    {tags.map(tag => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </ul>
);

export default TagList;
