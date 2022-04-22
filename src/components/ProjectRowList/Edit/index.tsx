import React, { ReactElement, HTMLAttributes } from "react";

import ListView from "components/ListView";
import ProjectRowModel from "models/ProjectRow";

import EditProjectRow from "./_ProjectRow";

interface EditProjectRowListProps extends HTMLAttributes<HTMLElement> {
  rows: ProjectRowModel[] | undefined;
  setRows: (value: ProjectRowModel[]) => void;
}

const EditProjectRowList = ({
  rows,
  setRows,
  ...rest
}: EditProjectRowListProps): ReactElement => (
  <ListView
    items={rows}
    getItemKey={row => row.id}
    onRenderRow={model => (
      <EditProjectRow
        model={model}
        updateRow={(value: ProjectRowModel) => {
          if (rows === undefined) return;
          setRows(rows.map(r => (r.id === value.id ? value : r)));
        }}
      />
    )}
    {...rest}
  />
);

export default EditProjectRowList;
