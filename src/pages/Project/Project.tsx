import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { RootState } from "services/store";

import ProjectPreviewLayout from "./ProjectPreviewLayout";

import ProjectQueryModel from "./models/ProjectQueryModel";

import { fetchProjectWithTitle } from "./services/projectsReducer";
import {
  selectProjectById,
  selectRowsByProjectId,
} from "./services/projectSelectors";

import { ProjectRowModel } from "./Row";

import "./style.css";

const Project: React.FC = () => {
  const dispatch = useDispatch();

  const { title } = useParams<ProjectQueryModel>();

  const project = useSelector((state: RootState) =>
    selectProjectById(state, title)
  );

  const rows = useSelector(selectRowsByProjectId(title)).map(
    (model): ProjectRowModel => model
  );

  let body: React.ReactElement;

  // check if null or undefined
  if (project === undefined) {
    dispatch(fetchProjectWithTitle(title));
    body = <h1>Loading</h1>;
  } else {
    body = (
      <ProjectPreviewLayout
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

export default Project;
