import React, { ReactElement, useState } from "react";

import NewProjectLayout from "layouts/NewProject";
import ProjectModel from "models/Project";

const NewProject = (): ReactElement => {
  const profile = {
    // TODO: to be replaced with the current user's account
    profilePicture: {
      name: "",
      url: "",
    },
    displayName: "",
    bio: "",
    contactEmail: "",
    contactNumber: "",
    tags: ["Mobile", "Web"],
  };

  const [project, setProject] = useState<ProjectModel>({
    author: "",
    title: "",
    tagFlags: 0,
    thumbnail: {
      url: "",
      name: "",
    },
  });

  return (
    <NewProjectLayout
      project={project}
      profile={profile}
      setProject={setProject}
    />
  );
};

export default NewProject;
