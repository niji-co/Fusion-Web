import React, { ReactElement, ReactNode, HTMLAttributes } from "react";

interface NavbarItemProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const NavbarItem = ({ children, ...rest }: NavbarItemProps): ReactElement => (
  <li {...rest}>{children}</li>
);

NavbarItem.defaultProps = {
  children: undefined,
};

type NavbarItemType = ReactElement<NavbarItemProps>;

export default NavbarItem;
export { NavbarItemType };
