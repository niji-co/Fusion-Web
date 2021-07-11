import React, { ReactElement, HTMLAttributes, useState } from "react";

import ProjectHeader from "components/ProjectHeader";
import TabGroup from "components/TabGroup";

type NewProjectContainerProps = HTMLAttributes<HTMLElement>;

const NewProjectContainer = ({
  ...rest
}: NewProjectContainerProps): ReactElement => {
  const [title, setTitle] = useState("");
  const [tagFlags, setTagFlags] = useState(0);

  return (
    <div {...rest}>
      <TabGroup>
        <TabGroup.Item title="Edit">
          <h1>Edit</h1>
        </TabGroup.Item>
        <TabGroup.Item title="Preview">
          <ProjectHeader
            author="James"
            title={title}
            tagFlags={tagFlags}
            thumbnail={{ url: "", name: "" }}
            authorProfile={undefined}
          />
        </TabGroup.Item>
      </TabGroup>
    </div>
  );
};

export default NewProjectContainer;
