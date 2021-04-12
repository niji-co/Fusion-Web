import ProjectRowProps from "./ProjectRowProps";
import Asset from "../../../../models/Asset";

interface ProjectRowFileProps extends ProjectRowProps {
  asset: Asset;
}

export default ProjectRowFileProps;
