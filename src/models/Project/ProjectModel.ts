import AssetModel from "models/Asset";

interface ProjectModel {
  title: string;
  tags: string[];
  thumbnail: AssetModel;
  rows: string[];
}

export default ProjectModel;
