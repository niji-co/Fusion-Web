import { HTMLAttributes } from "react";

enum ProjectRowType {
  Text,
  Image,
  Video,
  File,
}

  id: string;
interface ProjectRowProps extends HTMLAttributes<HTMLElement> {
  type: ProjectRowType;
}

export default ProjectRowProps;

export { ProjectRowType };
