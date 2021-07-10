import React, { ReactElement, HTMLAttributes } from "react";

import NavbarItem, { NavbarItemType } from "./_NavbarItem";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: NavbarItemType | NavbarItemType[];
}

const Navbar = ({ children, ...rest }: NavbarProps): ReactElement => (
  <ul {...rest}>{children}</ul>
);

Navbar.Item = NavbarItem;

export default Navbar;
