import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { RootState } from "services/store";

import ProjectPreviewLayout from "./ProjectPreviewLayout";

import { fetchProjectWithTitle } from "./services/projectsReducer";
import {
  selectProjectById,
  selectRowsByProjectId,
} from "./services/projectSelectors";

import { ProjectRowModel } from "./Row";

import "./style.css";

const Project: React.FC = () => {
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search);

  const titleParam = query.get("title") || "";

  const project = useSelector((state: RootState) =>
    selectProjectById(state, titleParam)
  );

  const rows = useSelector(selectRowsByProjectId(titleParam)).map(
    (model): ProjectRowModel => model
  );

  let body: React.ReactElement;

  // check if null or undefined
  if (project === undefined) {
    dispatch(fetchProjectWithTitle(titleParam));
    body = <h1>Loading</h1>;
  } else {
    const { title, tags } = project;
    body = <ProjectPreviewLayout title={title} tags={tags} rows={rows} />;
  }

  return (
    <>
      <Link to="/">Home</Link>
      {body}
    </>
  );
};

export default Project;
