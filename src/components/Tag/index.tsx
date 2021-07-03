import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import TagModel from "models/Tag";

type TagProps = TagModel & {
  currentFilter: number;
} & HTMLAttributes<HTMLElement>;

const Tag: React.FC<TagProps> = ({
  flag,
  name,
  username,
  currentFilter,
  ...rest
}: TagProps) => (
  <li {...rest}>
    <Link to={`/${username}?tags=${flag | currentFilter}`}>{name}</Link>
  </li>
);

export default Tag;
