enum ProjectRowType {
  Text,
  Image,
  Video,
  File,
}

interface IProjectRow {
  index: number;
  type: ProjectRowType;
}

export default IProjectRow;

export { ProjectRowType };
