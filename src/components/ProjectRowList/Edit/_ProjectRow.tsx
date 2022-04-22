import React, { ReactElement, HTMLAttributes } from "react";

import ProjectRowModel, {
  ProjectRowType,
  ProjectRowTextModel,
  ProjectRowImageModel,
  ProjectRowVideoModel,
  ProjectRowFileModel,
} from "models/ProjectRow";

import EditProjectRowFile from "./_ProjectRowFile";
import EditProjectRowImage from "./_ProjectRowImage";
import EditProjectRowText from "./_ProjectRowText";
import EditProjectRowVideo from "./_ProjectRowVideo";

interface EditProjectRowProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowModel;
  updateRow: (value: ProjectRowModel) => void;
}

const EditProjectRow = ({
  model,
  ...rest
}: EditProjectRowProps): ReactElement | null => {
  switch (model.type) {
    case ProjectRowType.Text:
      return (
        <EditProjectRowText model={model as ProjectRowTextModel} {...rest} />
      );
    case ProjectRowType.Image:
      return (
        <EditProjectRowImage model={model as ProjectRowImageModel} {...rest} />
      );
    case ProjectRowType.Video:
      return (
        <EditProjectRowVideo model={model as ProjectRowVideoModel} {...rest} />
      );
    case ProjectRowType.File:
      return (
        <EditProjectRowFile model={model as ProjectRowFileModel} {...rest} />
      );
    default:
      return null;
  }
};

export default EditProjectRow;
