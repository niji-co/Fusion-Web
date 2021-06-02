import { createAction } from "@reduxjs/toolkit";

import React from "react";

const onInputChange = createAction(
  "input/on-change",
  (event: React.ChangeEvent<HTMLInputElement>) => ({
    payload: event.target.value,
  })
);

const inputActions = {
  onChange: onInputChange,
};

export { onInputChange };

export default inputActions;
