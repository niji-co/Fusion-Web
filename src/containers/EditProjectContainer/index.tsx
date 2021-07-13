import React, { ReactElement, HTMLAttributes, useState } from "react";

import ProjectHeader from "components/ProjectHeader";
import EditProjectHeader from "components/ProjectHeader/Edit";
import TabGroup from "components/TabGroup";
import ProjectModel from "models/Project";
import { ProfileModel } from "models/User";

interface EditProjectContainerProps extends HTMLAttributes<HTMLElement> {
  project: ProjectModel;
  setProject: (value: ProjectModel) => void;
  profile: ProfileModel;
}

const EditProjectContainer = ({
  project,
  setProject,
  profile,
  ...rest
}: EditProjectContainerProps): ReactElement => {
  return (
    <div {...rest}>
      <TabGroup>
        <TabGroup.Item title="Edit">
          <h1>Edit</h1>
          <EditProjectHeader
            {...project}
            authorProfile={profile}
            setTitle={title => setProject({ ...project, title })}
            setTagFlags={tagFlags => setProject({ ...project, tagFlags })}
          />
        </TabGroup.Item>
        <TabGroup.Item title="Preview">
          <ProjectHeader {...project} authorProfile={profile} />
        </TabGroup.Item>
      </TabGroup>
    </div>
  );
};

export default EditProjectContainer;
