import ProjectRowProps from "./ProjectRowProps";
import AssetModel from "../../../../models/AssetModel";

interface ProjectRowFileProps extends ProjectRowProps {
  asset: AssetModel;
}

export default ProjectRowFileProps;
