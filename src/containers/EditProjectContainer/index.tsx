import React, { ReactElement, HTMLAttributes } from "react";

import ProjectHeader from "components/ProjectHeader";
import EditProjectHeader from "components/ProjectHeader/Edit";
import ProjectRowList from "components/ProjectRowList";
import EditProjectRowList from "components/ProjectRowList/Edit";
import TabGroup from "components/TabGroup";
import ProjectModel from "models/Project";
import ProjectRowModel, {
  ProjectRowType,
  ProjectRowAssetModel,
  ProjectRowTextModel,
  TextStyle,
} from "models/ProjectRow";
import { ProfileModel } from "models/User";

interface EditProjectContainerProps extends HTMLAttributes<HTMLElement> {
  project: ProjectModel;
  setProject: (value: ProjectModel) => void;
  profile: ProfileModel;
  rows: ProjectRowModel[];
  setRows: (value: ProjectRowModel[]) => void;
}

const addTextRow = (
  rows: ProjectRowModel[],
  setRows: (value: ProjectRowModel[]) => void
): void => {
  const newRow: ProjectRowTextModel = {
    id: `${rows.length}`,
    type: ProjectRowType.Text,
    content: "",
    style: TextStyle.p,
  };
  setRows([...rows, newRow]);
};

const addAssetRow = (
  rows: ProjectRowModel[],
  type: ProjectRowType,
  setRows: (value: ProjectRowModel[]) => void
): void => {
  const newRow: ProjectRowAssetModel = {
    id: `${rows.length}`,
    type,
    asset: {
      name: "",
      url: "",
    },
  };
  setRows([...rows, newRow]);
};

const EditProjectContainer = ({
  project,
  setProject,
  profile,
  rows,
  setRows,
  ...rest
}: EditProjectContainerProps): ReactElement => {
  return (
    <div {...rest}>
      <TabGroup>
        <TabGroup.Item title="Edit">
          <h1>Edit</h1>
          <EditProjectHeader
            {...project}
            authorProfile={profile}
            setTitle={title => setProject({ ...project, title })}
            setTagFlags={tagFlags => setProject({ ...project, tagFlags })}
          />
          <button type="button" onClick={() => addTextRow(rows, setRows)}>
            New Text Row
          </button>
          <button
            type="button"
            onClick={() => addAssetRow(rows, ProjectRowType.Image, setRows)}
          >
            New Image Row
          </button>
          <button
            type="button"
            onClick={() => addAssetRow(rows, ProjectRowType.Video, setRows)}
          >
            New Video Row
          </button>
          <button
            type="button"
            onClick={() => addAssetRow(rows, ProjectRowType.File, setRows)}
          >
            New File Row
          </button>
          <EditProjectRowList rows={rows} setRows={setRows} />
        </TabGroup.Item>
        <TabGroup.Item title="Preview">
          <ProjectHeader {...project} authorProfile={profile} />
          <ProjectRowList rows={rows} />
        </TabGroup.Item>
      </TabGroup>
    </div>
  );
};

export default EditProjectContainer;
