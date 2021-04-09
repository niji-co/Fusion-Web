import IProjectRow from "./IProjectRow";

enum TextStyle {
  h1,
  h2,
  h3,
  p,
}

interface IProjectRowText extends IProjectRow {
  content: string;
  style: TextStyle;
}

export default IProjectRowText;
