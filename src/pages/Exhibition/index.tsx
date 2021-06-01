import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import ExhibitionModel from "models/Exhibition";

type ExhibitionProps = ExhibitionModel & HTMLAttributes<HTMLElement>;

const Exhibition: React.FC = () => (
  <div className="exhibition">
    <h1>Exhibitions</h1>
    <Link to="/">Home</Link>
    <br />
    <Link to="/profile">Profile</Link>
    <br />
    <Link to="/exhibition/host">Host</Link>
    <br />
  </div>
);

export default Exhibition;
