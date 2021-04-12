import ProjectRowProps from "./ProjectRowProps";

enum TextStyle {
  h1,
  h2,
  h3,
  p,
}

interface ProjectRowTextProps extends ProjectRowProps {
  content: string;
  style: TextStyle;
}

export default ProjectRowTextProps;
export { TextStyle };
