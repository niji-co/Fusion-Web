import AssetModel from "models/AssetModel";

interface ProjectModel {
  title: string;
  tags: string[];
  thumbnail: AssetModel;
  rows: string[];
}

export default ProjectModel;
