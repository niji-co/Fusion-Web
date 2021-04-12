import React from "react";
// model
import IProjectRow, { ProjectRowType } from "./types/IProjectRow";
import IProjectRowText from "./types/IProjectRowText";
// views
import ProjectRowText from "./ProjectRowText";
// Styles
import "./style.css";

const ProjectRow: React.FC<IProjectRow> = (props: IProjectRow) => {
  let row = <div className="project-row-default" />;

  switch (props.type) {
    case ProjectRowType.Text:
      row = ProjectRowText(props as IProjectRowText);
      break;
    default:
      break;
  }

  return <div className="project-row">{row}</div>;
};

export default ProjectRow;
