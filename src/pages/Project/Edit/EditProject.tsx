import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { onInputChange } from "../../../services/actions/inputActions";
import selectProject from "../services/projectSelector";

const EditProject: React.FC = () => {
  const project = useSelector(selectProject);
  const dispatch = useDispatch();

  return (
    <div className="edit-project">
      <h1>Edit</h1>
      <input
        value={project.title}
        onChange={event => dispatch(onInputChange(event))}
      />
      <p>Preview: {project.title}</p>
    </div>
  );
};

export default EditProject;
