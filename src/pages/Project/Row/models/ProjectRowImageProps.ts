import ProjectRowProps from "./ProjectRowProps";
import Asset from "../../../../models/Asset";

interface ProjectRowImageProps extends ProjectRowProps {
  asset: Asset;
}

export default ProjectRowImageProps;
