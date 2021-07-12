import React, { ReactElement } from "react";

import NewProjectLayout from "layouts/NewProject";

const NewProject = (): ReactElement => {
  const profile = {
    profilePicture: {
      name: "",
      url: "",
    },
    displayName: "",
    bio: "",
    contactEmail: "",
    contactNumber: "",
    tags: [],
  };

  return <NewProjectLayout username="" profile={profile} />;
};

export default NewProject;
