import React from "react";
import ProjectRowVideoProps from "./models/ProjectRowVideoProps";

const ProjectRowVideo: React.FC<ProjectRowVideoProps> = ({
  asset,
}: ProjectRowVideoProps) => (
  <div className="project-row-video">
    <p>#TODO CREATE VIDEO COMPONENT for &quot{asset.name}&quot</p>
  </div>
);

export default ProjectRowVideo;
