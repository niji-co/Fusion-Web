import React, { ReactElement, HTMLAttributes } from "react";

import { ProjectRowVideoModel } from "models/ProjectRow";

interface EditProjectRowVideoProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowVideoModel;
}

const EditProjectRowVideo = ({
  model,
  className,
  ...rest
}: EditProjectRowVideoProps): ReactElement => (
  <div className={`project-row-video ${className || ""}`} {...rest}>
    <p>#TODO CREATE VIDEO COMPONENT for &quot{model.asset.name}&quot</p>
  </div>
);

export default EditProjectRowVideo;
