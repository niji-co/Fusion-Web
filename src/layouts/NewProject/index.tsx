import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import NewProjectContainer from "containers/NewProjectContainer";

const NewProjectLayout = (): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <NewProjectContainer />
  </>
);

export default NewProjectLayout;
