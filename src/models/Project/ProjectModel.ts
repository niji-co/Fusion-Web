import AssetModel from "models/Asset";
import ProjectRowModel from "models/ProjectRow";

interface ProjectModel {
  title: string;
  author: string;
  tags: string[];
  thumbnail: AssetModel;
  rows: ProjectRowModel[];
}

export default ProjectModel;
