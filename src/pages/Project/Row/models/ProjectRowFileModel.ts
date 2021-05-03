import AssetModel from "models/AssetModel";
import ProjectRowModel from "./ProjectRowModel";

interface ProjectRowFileModel extends ProjectRowModel {
  asset: AssetModel;
}

export default ProjectRowFileModel;
