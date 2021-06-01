import React, { HTMLAttributes } from "react";

import ProjectRowText from "./ProjectRowText";
import ProjectRowImage from "./ProjectRowImage";
import ProjectRowVideo from "./ProjectRowVideo";
import ProjectRowFile from "./ProjectRowFile";

import ProjectRowModel, { ProjectRowType } from "./models/ProjectRowModel";
import ProjectRowTextModel from "./models/ProjectRowTextModel";
import ProjectRowImageModel from "./models/ProjectRowImageModel";
import ProjectRowVideoModel from "./models/ProjectRowVideoModel";
import ProjectRowFileModel from "./models/ProjectRowFileModel";

import "./style.css";

interface ProjectRowProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowModel;
}

const ProjectRow: React.FC<ProjectRowProps> = ({
  model,
  ...rest
}: ProjectRowProps) => {
  switch (model.type) {
    case ProjectRowType.Text:
      return <ProjectRowText model={model} {...rest} />;
    case ProjectRowType.Image:
      return <ProjectRowImage model={model} {...rest} />;
    case ProjectRowType.Video:
      return <ProjectRowVideo model={model} {...rest} />;
    case ProjectRowType.File:
      return <ProjectRowFile model={model} {...rest} />;
    default:
      return null;
  }
};

export default ProjectRow;
