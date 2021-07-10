enum ProjectRowType {
  Text,
  Image,
  Video,
  File,
}

interface ProjectRowModel {
  id: string;
  type: number;
}

export default ProjectRowModel;
export { ProjectRowType };
