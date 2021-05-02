import AssetModel from "models/AssetModel";
import ProjectRowProps from "./ProjectRowProps";

interface ProjectRowFileProps extends ProjectRowProps {
  asset: AssetModel;
}

export default ProjectRowFileProps;
