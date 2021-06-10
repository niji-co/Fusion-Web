import AssetModel from "models/Asset";

import ProjectRowModel from "./ProjectRowModel";

interface ProjectRowImageModel extends ProjectRowModel {
  asset: AssetModel;
}

export default ProjectRowImageModel;
