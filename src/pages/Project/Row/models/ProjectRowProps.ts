enum ProjectRowType {
  Text,
  Image,
  Video,
  File,
}

interface ProjectRowProps {
  id: string;
  type: number;
}

export default ProjectRowProps;

export { ProjectRowType };
