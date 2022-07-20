import AssetModel from "models/Asset";

import ProjectRowModel from "./_ProjectRowModel";

interface ProjectRowFileModel extends ProjectRowModel {
  asset: AssetModel;
}

export default ProjectRowFileModel;
