import React, { ReactElement, HTMLAttributes } from "react";

import { ProjectRowFileModel } from "models/ProjectRow";

interface EditProjectRowFileProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowFileModel;
}

const EditProjectRowFile = ({
  model,
  className,
  ...rest
}: EditProjectRowFileProps): ReactElement => (
  <div className={`project-row-file ${className || ""}`} {...rest}>
    <p>#TODO CREATE FILE COMPONENT for &quot{model.asset.name}&quot</p>
    <a href={model.asset.url}>{model.asset.name}</a>
  </div>
);

export default EditProjectRowFile;
