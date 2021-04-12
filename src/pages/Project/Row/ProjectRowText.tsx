import React, { ReactElement } from "react";
import ProjectRowTextProps from "./models/ProjectRowTextProps";

const ProjectRowText = (props: ProjectRowTextProps): ReactElement => {
  const { content } = props;
  return (
    <div className="project-row-text">
      <p>{content}</p>
    </div>
  );
};

export default ProjectRowText;
