import React, { ReactElement } from "react";
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
  let row: ReactElement | null = null;

  switch (props.type) {
    case ProjectRowType.Text:
      row = ProjectRowText(props as ProjectRowTextProps);
      break;
    case ProjectRowType.Image:
      row = ProjectRowImage(props as ProjectRowImageProps);
      break;
      break;
    case ProjectRowType.Video:
      row = ProjectRowVideo(props as ProjectRowVideoProps);
      break;
      break;
    case ProjectRowType.File:
      row = ProjectRowFile(props as ProjectRowFileProps);
      break;
    default:
      break;
  }

  return <div className="project-row">{row}</div>;
};

export default ProjectRow;
