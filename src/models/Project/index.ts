import AssetModel from "models/Asset";

import ProjectQueryModel from "./ProjectQueryModel";

interface ProjectModel {
  title: string;
  tags: string[];
  thumbnail: AssetModel;
  rows: string[];
}

export default ProjectModel;
export { ProjectQueryModel };
