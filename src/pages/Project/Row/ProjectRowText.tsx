import React, { ReactElement } from "react";
import IProjectRowText from "./types/IProjectRowText";

const ProjectRowText = (props: IProjectRowText): ReactElement => {
  const { content } = props;
  return (
    <div className="project-row-text">
      <p>{content}</p>
    </div>
  );
};

export default ProjectRowText;
