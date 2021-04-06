import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTitle, selectProject } from "../projectSlice";

const EditProject = (): ReactElement => {
  const project = useSelector(selectProject);
  const dispatch = useDispatch();

  return (
    <div className="edit-project">
      <h1>Edit</h1>
      <input
        value={project.title}
        onChange={event => dispatch(setTitle(event.target.value))}
      />
      <p>Preview: {project.title}</p>
    </div>
  );
};

export default EditProject;
