import React from "react";
import ProjectRowImageProps from "./models/ProjectRowImageProps";

const ProjectRowImage: React.FC<ProjectRowImageProps> = ({
  id,
  asset,
}: ProjectRowImageProps) => (
  <div key={id} className="project-row-image">
    <img alt={asset.name} src={asset.url} />
  </div>
);

export default ProjectRowImage;
