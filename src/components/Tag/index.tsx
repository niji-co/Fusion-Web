import React, { HTMLAttributes } from "react";

const Tag: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => (
  <button className={`tag ${className || ""}`} type="button" {...rest}>
    {children}
  </button>
);

export default Tag;
