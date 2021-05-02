enum ProjectRowType {
  Text,
  Image,
  Video,
  File,
}

interface ProjectRowProps {
  id: string;
  type: ProjectRowType;
}

export default ProjectRowProps;

export { ProjectRowType };
