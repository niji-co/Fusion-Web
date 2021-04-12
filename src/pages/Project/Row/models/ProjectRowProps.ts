enum ProjectRowType {
  Text,
  Image,
  Video,
  File,
}

interface ProjectRowProps {
  index: number;
  type: ProjectRowType;
}

export default ProjectRowProps;

export { ProjectRowType };
