import React, { HTMLAttributes } from "react";

const Tag: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => (
  <li className={`tag ${className || ""}`}>
    <button type="button" {...rest}>
      {children}
    </button>
  </li>
);

export default Tag;
