import React, { ReactElement, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ExhibitionModel from "models/Exhibition";

const ExhibitionLayout = ({
  UUID,
  host,
  title,
  description,
}: ExhibitionModel): ReactElement => (
  <>
    <h1>Exhibitions</h1>
    <Link to="/">Home</Link>
    <br />
    <Link to="/profile">Profile</Link>
    <br />
    <Link to="/exhibition/host">Host: {host} </Link>
    <br />
    {/* <Link to="/exhibition/host">Co-Host: {coHost} </Link>
    <br /> */}
  </>
);

export default ExhibitionLayout;
