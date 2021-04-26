import React from "react";
// views
import ProjectRowText from "./ProjectRowText";
import ProjectRowImage from "./ProjectRowImage";
import ProjectRowVideo from "./ProjectRowVideo";
import ProjectRowFile from "./ProjectRowFile";
// models
import ProjectRowProps, { ProjectRowType } from "./models/ProjectRowProps";
import ProjectRowTextProps from "./models/ProjectRowTextProps";
import ProjectRowImageProps from "./models/ProjectRowImageProps";
import ProjectRowVideoProps from "./models/ProjectRowVideoProps";
import ProjectRowFileProps from "./models/ProjectRowFileProps";
// Styles
import "./style.css";

const ProjectRow: React.FC<ProjectRowProps> = (props: ProjectRowProps) => {
  switch (props.type) {
    case ProjectRowType.Text:
      return ProjectRowText(props as ProjectRowTextProps);
    case ProjectRowType.Image:
      return ProjectRowImage(props as ProjectRowImageProps);
    case ProjectRowType.Video:
      return ProjectRowVideo(props as ProjectRowVideoProps);
    case ProjectRowType.File:
      return ProjectRowFile(props as ProjectRowFileProps);
    default:
      return null;
  }
};

export default ProjectRow;
