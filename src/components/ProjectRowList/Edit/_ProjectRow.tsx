import React, { ReactElement, HTMLAttributes } from "react";

import ProjectRowModel, {
  ProjectRowType,
  ProjectRowAssetModel,
  ProjectRowTextModel,
} from "models/ProjectRow";

import EditProjectRowFile from "./_ProjectRowFile";
import EditProjectRowImage from "./_ProjectRowImage";
import EditProjectRowText from "./_ProjectRowText";
import EditProjectRowVideo from "./_ProjectRowVideo";

interface EditProjectRowProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowModel;
  updateRow: (value: ProjectRowModel) => void;
  deleteRow: () => void;
}

const EditProjectRow = ({
  model,
  deleteRow,
  ...rest
}: EditProjectRowProps): ReactElement | null => {
  let row: ReactElement;
  switch (model.type) {
    case ProjectRowType.Text:
      row = (
        <EditProjectRowText model={model as ProjectRowTextModel} {...rest} />
      );
      break;
    case ProjectRowType.Image:
      row = (
        <EditProjectRowImage model={model as ProjectRowAssetModel} {...rest} />
      );
      break;
    case ProjectRowType.Video:
      row = (
        <EditProjectRowVideo model={model as ProjectRowAssetModel} {...rest} />
      );
      break;
    case ProjectRowType.File:
      row = (
        <EditProjectRowFile model={model as ProjectRowAssetModel} {...rest} />
      );
      break;
    default:
      return null;
  }
  return (
    <>
      {row}
      <button type="button" onClick={() => deleteRow()}>
        Delete
      </button>
    </>
  );
};

export default EditProjectRow;
