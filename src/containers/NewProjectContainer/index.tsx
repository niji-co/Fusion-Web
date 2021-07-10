import React, { ReactElement, HTMLAttributes } from "react";

import TabGroup from "components/TabGroup";

type NewProjectContainerProps = HTMLAttributes<HTMLElement>;

const NewProjectContainer = ({
  ...rest
}: NewProjectContainerProps): ReactElement => {
  return (
    <div {...rest}>
      <TabGroup>
        <TabGroup.Item title="Edit">
          <h1>Edit</h1>
        </TabGroup.Item>
        <TabGroup.Item title="Preview">
          <h1>Preview</h1>
        </TabGroup.Item>
      </TabGroup>
    </div>
  );
};

export default NewProjectContainer;
