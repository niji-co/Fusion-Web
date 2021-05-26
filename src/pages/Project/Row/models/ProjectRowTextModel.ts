import ProjectRowModel from "./ProjectRowModel";

enum TextStyle {
  h1,
  h2,
  h3,
  p,
}

interface ProjectRowTextModel extends ProjectRowModel {
  content: string;
  style: TextStyle;
}

export default ProjectRowTextModel;
export { TextStyle };
