import AssetModel from "models/Asset";

import ProjectRowModel from "./_ProjectRowModel";

interface ProjectRowAssetModel extends ProjectRowModel {
  asset: AssetModel;
}

export default ProjectRowAssetModel;
