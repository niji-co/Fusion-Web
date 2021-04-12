import React from "react";
// model
import ProjectRowProps, { ProjectRowType } from "./models/ProjectRowProps";
import ProjectRowTextProps from "./models/ProjectRowTextProps";
// views
import ProjectRowText from "./ProjectRowText";
// Styles
import "./style.css";

const ProjectRow: React.FC<ProjectRowProps> = (props: ProjectRowProps) => {
  let row = <div className="project-row-default" />;

  switch (props.type) {
    case ProjectRowType.Text:
      row = ProjectRowText(props as ProjectRowTextProps);
      break;
    default:
      break;
  }

  return <div className="project-row">{row}</div>;
};

export default ProjectRow;
