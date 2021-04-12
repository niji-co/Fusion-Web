import React from "react";
import ProjectRowFileProps from "./models/ProjectRowFileProps";

const ProjectRowFile: React.FC<ProjectRowFileProps> = ({
  asset,
}: ProjectRowFileProps) => (
  <div className="project-row-file">
    <p>#TODO CREATE FILE COMPONENT for &quot{asset.name}&quot</p>
    <a href={asset.url}>{asset.name}</a>
  </div>
);

export default ProjectRowFile;
