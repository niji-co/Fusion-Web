import React, { useState } from "react";

import ProjectPreview from "components/ProjectPreview";

import ProjectModel, { ProjectQueryModel } from "models/Project";

import api from "api/fakeProjectAPI";

const ProjectLoader: React.FC<ProjectQueryModel> = ({
  title,
}: ProjectQueryModel) => {
  const [project, setProject] = useState<ProjectModel>();

  if (project === undefined) {
    const fetchProject = api.fetchWithTitle(title);
    fetchProject
      .then(setProject)
      .catch(err => console.log("Error fetching project", err));
    return <h1>Loading</h1>;
  }

  return (
    <ProjectPreview
      title={project.title}
      tags={project.tags}
      thumbnail={project.thumbnail}
      rows={project.rows}
    />
  );
};

export default ProjectLoader;
