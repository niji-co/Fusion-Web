import React, { ReactElement, HTMLAttributes } from "react";

import { ProjectRowImageModel } from "models/ProjectRow";

interface EditProjectRowImageProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowImageModel;
}

const EditProjectRowImage = ({
  model,
  className,
  ...rest
}: EditProjectRowImageProps): ReactElement => (
  <div className={`project-row-image ${className || ""}`} {...rest}>
    <img alt={model.asset.name} src={model.asset.url} />
  </div>
);

export default EditProjectRowImage;
