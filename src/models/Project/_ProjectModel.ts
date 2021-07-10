import AssetModel from "models/Asset";

interface ProjectModel {
  author: string;
  title: string;
  tagFlags: number;
  thumbnail: AssetModel;
}

export default ProjectModel;
