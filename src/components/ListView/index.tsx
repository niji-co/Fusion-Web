import React, { ReactElement, HTMLAttributes } from "react";

interface ListViewProps<T> extends HTMLAttributes<HTMLElement> {
  items: T[] | undefined;
  getItemKey: (model: T) => string;
  onRenderRow: (model: T) => ReactElement;
  predicate?: (i: T) => boolean;
}

const ListView = <T extends unknown>({
  items,
  getItemKey,
  onRenderRow,
  predicate,
  ...rest
}: ListViewProps<T>): ReactElement => {
  const list = predicate === undefined ? items : items?.filter(predicate);
  return (
    <ul {...rest}>
      {list?.map(item => (
        <li key={getItemKey(item)}>{onRenderRow(item)}</li>
      ))}
    </ul>
  );
};

ListView.defaultProps = {
  predicate: undefined,
};

export default ListView;
