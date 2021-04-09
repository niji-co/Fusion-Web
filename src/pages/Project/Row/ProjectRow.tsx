import React, { ReactElement } from "react";
// model
import IProjectRow, { ProjectRowType } from "./services/IProjectRow";
import IProjectRowText from "./services/IProjectRowText";
// views
import ProjectRowText from "./ProjectRowText";
// Styles
import "./style.css";

const ProjectRow = (props: IProjectRow): ReactElement => {
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
