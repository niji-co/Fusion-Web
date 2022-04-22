import React, { ReactElement, HTMLAttributes, ChangeEvent } from "react";

import Radio from "components/Radio";
import ProjectRowModel, { ProjectRowTextModel } from "models/ProjectRow";

interface EditProjectRowTextProps extends HTMLAttributes<HTMLElement> {
  model: ProjectRowTextModel;
  updateRow: (value: ProjectRowModel) => void;
}

const EditProjectRowText = ({
  model,
  updateRow,
  className,
  ...rest
}: EditProjectRowTextProps): ReactElement => {
  const handleStyleChange = (value: number): void => {
    const newContent = { style: value };
    updateRow({ ...model, ...newContent });
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newContent = { content: event.target.value };
    updateRow({ ...model, ...newContent });
  };

  return (
    <div className={`project-row-text ${className || ""}`} {...rest}>
      <input
        placeholder="New Paragraph"
        value={model.content}
        onChange={handleTextChange}
      />
      <Radio
        options={["h1", "h2", "h3", "p"]}
        selected={model.style.valueOf()}
        onSelected={handleStyleChange}
      />
    </div>
  );
};

export default EditProjectRowText;
