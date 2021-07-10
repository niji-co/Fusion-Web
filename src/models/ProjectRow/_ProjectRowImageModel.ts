import AssetModel from "models/Asset";

import ProjectRowModel from "./_ProjectRowModel";

interface ProjectRowImageModel extends ProjectRowModel {
  asset: AssetModel;
}

export default ProjectRowImageModel;
