import React from "react";
import ProjectRowVideoProps from "./models/ProjectRowVideoProps";

const ProjectRowVideo: React.FC<ProjectRowVideoProps> = ({
  id,
  asset,
}: ProjectRowVideoProps) => (
  <div key={id} className="project-row-video">
    <p>#TODO CREATE VIDEO COMPONENT for &quot{asset.name}&quot</p>
  </div>
);

export default ProjectRowVideo;
