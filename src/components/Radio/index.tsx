import React, { ReactElement, HTMLAttributes } from "react";

interface RadioProps extends HTMLAttributes<HTMLElement> {
  options: string[];
  selected: number | undefined;
  onSelected: (value: number) => void;
}

const Radio = ({
  options,
  selected,
  onSelected,
  className,
  ...rest
}: RadioProps): ReactElement => (
  <div className={`radio ${className || ""}`} {...rest}>
    {options.map((o, index) => {
      const key = `${o}_${index}`;
      return (
        <label key={key} htmlFor={key}>
          <input
            type="radio"
            value={o}
            id={key}
            checked={index === selected}
            onChange={() => onSelected(index)}
          />
          {o}
        </label>
      );
    })}
  </div>
);

export default Radio;
