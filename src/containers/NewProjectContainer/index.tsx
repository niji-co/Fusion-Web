import React, { ReactElement, HTMLAttributes, useState } from "react";

import EditProjectHeader from "components/EditProjectHeader";
import ProjectHeader from "components/ProjectHeader";
import TabGroup from "components/TabGroup";
import { ProfileModel } from "models/User";

interface NewProjectContainerProps extends HTMLAttributes<HTMLElement> {
  username: string;
  profile: ProfileModel;
}

const NewProjectContainer = ({
  username,
  profile,
  ...rest
}: NewProjectContainerProps): ReactElement => {
  const [title, setTitle] = useState("");
  const [tagFlags, setTagFlags] = useState(0);

  return (
    <div {...rest}>
      <TabGroup>
        <TabGroup.Item title="Edit">
          <h1>Edit</h1>
          <EditProjectHeader
            author={username}
            title={title}
            tagFlags={tagFlags}
            thumbnail={{ url: "", name: "" }}
            authorProfile={profile}
            setTitle={setTitle}
            setTagFlags={setTagFlags}
          />
        </TabGroup.Item>
        <TabGroup.Item title="Preview">
          <ProjectHeader
            author={username}
            title={title}
            tagFlags={tagFlags}
            thumbnail={{ url: "", name: "" }}
            authorProfile={profile}
          />
        </TabGroup.Item>
      </TabGroup>
    </div>
  );
};

export default NewProjectContainer;
