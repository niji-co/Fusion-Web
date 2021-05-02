import { HTMLAttributes } from "react";
import { ProjectRowProps } from "../Row";

interface ProjectProps extends HTMLAttributes<HTMLElement> {
  title: string;
  tags: string[];
  rows: ProjectRowProps[];
}

export default ProjectProps;
