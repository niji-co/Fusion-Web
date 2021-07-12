import React, { ReactElement, HTMLAttributes } from "react";

import ListView from "components/ListView";
import TagModel from "models/Tag";

import Tag from "./_Tag";

interface TagListProps extends HTMLAttributes<HTMLElement> {
  tags: TagModel[];
  predicate?: (tag: TagModel) => boolean;
  currentFilter?: number;
}

const TagList = ({
  tags,
  predicate,
  currentFilter,
  ...rest
}: TagListProps): ReactElement => (
  <ListView
    items={tags}
    getItemKey={tag => `${tag.flag}`}
    onRenderRow={tag => <Tag {...tag} currentFilter={currentFilter || 0} />}
    predicate={predicate}
    {...rest}
  />
);

TagList.defaultProps = {
  currentFilter: 0,
  predicate: undefined,
};

export default TagList;
