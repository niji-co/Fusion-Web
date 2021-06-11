import React, { useState } from "react";

import api from "api/fakeProjectAPI";
import ProjectView from "components/ProjectView";
import ProjectModel, { ProjectQueryModel } from "models/Project";
import ProjectRowModel from "models/ProjectRow";

const ProjectLoader: React.FC<ProjectQueryModel> = ({
  author,
  title,
}: ProjectQueryModel) => {
  const [project, setProject] = useState<ProjectModel>();
  const [rows, setRows] = useState<ProjectRowModel[]>();

  if (project === undefined) {
    const fetchProject = api.fetchProject(author, title);
    fetchProject
      .then(setProject)
      .catch(err => console.log("Error fetching project", err));

    const fetchRows = api.fetchProjectRows(author, title);
    fetchRows
      .then(setRows)
      .catch(err => console.log("Error fetching project rows", err));

    return <h1>Loading</h1>;
  }

  return <ProjectView {...project} rows={rows || []} />;
};

export default ProjectLoader;
