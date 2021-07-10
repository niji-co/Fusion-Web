import React, { ReactElement, HTMLAttributes } from "react";

import Navbar from "components/Navbar";

import TabGroupItem, { TabGroupItemType } from "./_TabGroupItem";

interface TabGroupProps extends HTMLAttributes<HTMLElement> {
  children: TabGroupItemType | TabGroupItemType[];
}

const TabGroup = ({ children }: TabGroupProps): ReactElement => {
  const tabs = React.Children.map(children, child => child.props.title);

  return (
    <div>
      <Navbar>
        {tabs.map(tab => (
          <Navbar.Item key={tab}>{tab}</Navbar.Item>
        ))}
      </Navbar>
    </div>
  );
};

TabGroup.Item = TabGroupItem;

export default TabGroup;
