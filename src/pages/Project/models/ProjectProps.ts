import { ProjectRowProps } from "../Row";
import { HTMLAttributes } from "react";


interface ProjectProps extends HTMLAttributes<HTMLElement> {
  title: string;
  tags: string[];
  rows: ProjectRowProps[];
}

export default ProjectProps;
