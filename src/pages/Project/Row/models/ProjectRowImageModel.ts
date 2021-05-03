import AssetModel from "models/AssetModel";
import ProjectRowModel from "./ProjectRowModel";

interface ProjectRowImageModel extends ProjectRowModel {
  asset: AssetModel;
}

export default ProjectRowImageModel;
