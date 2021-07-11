import React, { ReactElement, HTMLAttributes } from "react";

import ProjectRowModel, {
  ProjectRowType,
  ProjectRowTextModel,
  ProjectRowImageModel,
  ProjectRowVideoModel,
  ProjectRowFileModel,
} from "models/ProjectRow";

import ProjectRowFile from "./_ProjectRowFile";
import ProjectRowImage from "./_ProjectRowImage";
import ProjectRowText from "./_ProjectRowText";
import ProjectRowVideo from "./_ProjectRowVideo";

interface ProjectRowProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowModel;
}

const ProjectRow = ({
  model,
  ...rest
}: ProjectRowProps): ReactElement | null => {
  switch (model.type) {
    case ProjectRowType.Text:
      return <ProjectRowText model={model as ProjectRowTextModel} {...rest} />;
    case ProjectRowType.Image:
      return (
        <ProjectRowImage model={model as ProjectRowImageModel} {...rest} />
      );
    case ProjectRowType.Video:
      return (
        <ProjectRowVideo model={model as ProjectRowVideoModel} {...rest} />
      );
    case ProjectRowType.File:
      return <ProjectRowFile model={model as ProjectRowFileModel} {...rest} />;
    default:
      return null;
  }
};

export default ProjectRow;
