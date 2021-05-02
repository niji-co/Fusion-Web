import AssetModel from "src/models/AssetModel";
import ProjectRowProps from "./ProjectRowProps";

interface ProjectRowImageProps extends ProjectRowProps {
  asset: AssetModel;
}

export default ProjectRowImageProps;
