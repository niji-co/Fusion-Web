import ProjectRowProps from "./ProjectRowProps";
import Asset from "../../../../models/Asset";

interface ProjectRowVideoProps extends ProjectRowProps {
  asset: Asset;
}

export default ProjectRowVideoProps;
