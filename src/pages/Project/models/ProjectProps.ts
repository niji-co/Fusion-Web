import { HTMLAttributes } from "react";
import { ProjectRowModel } from "../Row";

interface ProjectProps extends HTMLAttributes<HTMLElement> {
  title: string;
  tags: string[];
  rows: ProjectRowModel[];
}

export default ProjectProps;
