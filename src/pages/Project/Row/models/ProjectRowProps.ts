import { HTMLAttributes } from "react";

enum ProjectRowType {
  Text,
  Image,
  Video,
  File,
}

interface ProjectRowProps extends HTMLAttributes<HTMLElement> {
  id: string;
  type: ProjectRowType;
}

export default ProjectRowProps;

export { ProjectRowType };
