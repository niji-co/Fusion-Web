import AssetModel from "models/Asset";
import ProjectRowModel from "models/ProjectRow";

interface ProjectModel {
  title: string;
  tags: string[];
  thumbnail: AssetModel;
  rows: ProjectRowModel[];
}

export default ProjectModel;
