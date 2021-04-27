import ProjectRowProps from "./ProjectRowProps";
import AssetModel from "../../../../models/AssetModel";

interface ProjectRowImageProps extends ProjectRowProps {
  asset: AssetModel;
}

export default ProjectRowImageProps;
