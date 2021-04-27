import ProjectRowProps from "./ProjectRowProps";
import AssetModel from "../../../../models/AssetModel";

interface ProjectRowVideoProps extends ProjectRowProps {
  asset: AssetModel;
}

export default ProjectRowVideoProps;
