import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTitle } from "../services/projectReducer";
import selectProject from "../services/projectSelector";

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
