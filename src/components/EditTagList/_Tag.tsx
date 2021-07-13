import React, { ReactElement, HTMLAttributes } from "react";

import TagModel from "models/Tag";

type TagProps = TagModel & {
  currentFilter: number;
  setTagFlags: (value: number) => void;
} & HTMLAttributes<HTMLElement>;

const Tag = ({
  flag,
  name,
  currentFilter,
  setTagFlags,
  ...rest
}: TagProps): ReactElement => {
  return (
    <button
      type="button"
      onClick={() => setTagFlags(flag ^ currentFilter)}
      {...rest}
    >
      {flag & currentFilter ? `[${name}]` : name}
    </button>
  );
};

export default Tag;
