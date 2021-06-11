import AssetModel from "models/Asset";

interface ProjectModel {
  author: string;
  title: string;
  tags: string[];
  thumbnail: AssetModel;
}

export default ProjectModel;
