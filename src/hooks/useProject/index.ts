import { useState, useEffect } from "react";

import api from "api/fakeProjectAPI";
import ProjectModel from "models/Project";

const useProject = (
  authorUsername: string,
  projectTitle: string
): ProjectModel | undefined => {
  const [project, setProject] = useState<ProjectModel>();

  useEffect(() => {
    api
      .fetchProject(authorUsername, projectTitle)
      .then(setProject)
      .catch(err => console.error("Error fetching project", err));
  }, [authorUsername, projectTitle]);

  return project;
};

export default useProject;
