import AssetModel from "models/Asset";
import ProjectRowModel from "./ProjectRowModel";

interface ProjectRowFileModel extends ProjectRowModel {
  asset: AssetModel;
}

export default ProjectRowFileModel;
