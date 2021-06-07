import React, { ReactElement, Fragment, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProjectPreview from "components/ProjectPreview";

import AssetModel from "models/Asset";
import ProjectRowModel from "models/ProjectRow";

import { RootState } from "@/store";

import {
  fetchProjectWithTitle,
  selectProjectById,
  selectRowsByProjectId,
} from "reducers/Project";

interface ProjectProps extends HTMLAttributes<HTMLElement> {
  title: string;
}

const ProjectLayout: React.FC<ProjectProps> = ({ title }: ProjectProps) => {
  const dispatch = useDispatch();
  const project = useSelector((state: RootState) =>
    selectProjectById(state, title)
  );

  const rows = useSelector(selectRowsByProjectId(title)).map(
    (model): ProjectRowModel => model
  );

  let body: ReactElement;

  if (project === undefined) {
    dispatch(fetchProjectWithTitle(title));
    body = <h1>Loading</h1>;
  } else {
    body = (
      <ProjectPreview
        title={project.title}
        tags={project.tags}
        thumbnail={project.thumbnail}
        rows={rows}
      />
    );
  }

  return (
    <>
      <Link to="/">Home</Link>
      {body}
    </>
  );
};

export default ProjectLayout;
