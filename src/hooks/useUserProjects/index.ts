import { useState, useEffect } from "react";

import api from "api/fakeProjectAPI";
import ProjectModel from "models/Project";

const useUserProjects = (username: string): ProjectModel[] | undefined => {
  const [userProjects, setUserProjects] = useState<ProjectModel[]>();

  useEffect(() => {
    api
      .fetchProjects(username)
      .then(setUserProjects)
      .catch(err => console.error("Error fetching project", err));
  }, [username]);

  return userProjects;
};

export default useUserProjects;
