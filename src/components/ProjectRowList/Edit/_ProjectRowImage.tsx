import React, { ReactElement, HTMLAttributes, ChangeEvent } from "react";

import ProjectRowModel, { ProjectRowAssetModel } from "models/ProjectRow";

interface EditProjectRowImageProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowAssetModel;
  updateRow: (value: ProjectRowModel) => void;
}

const EditProjectRowImage = ({
  model,
  updateRow,
  className,
  ...rest
}: EditProjectRowImageProps): ReactElement => {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newAsset = { asset: { ...model.asset, url: event.target.value } };
    updateRow({ ...model, ...newAsset });
  };

  return (
    <div className={`project-row-image ${className || ""}`} {...rest}>
      <input
        placeholder="Image URL"
        value={model.asset.url}
        onChange={handleTextChange}
      />
      <img alt={model.asset.name} src={model.asset.url} />
    </div>
  );
};

export default EditProjectRowImage;
