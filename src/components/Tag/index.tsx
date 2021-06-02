import React, { HTMLAttributes } from "react";

interface TagProps extends HTMLAttributes<HTMLElement> {
  value: string;
}

const Tag: React.FC<TagProps> = ({ value }: TagProps) => <span>{value}</span>;

export default Tag;
