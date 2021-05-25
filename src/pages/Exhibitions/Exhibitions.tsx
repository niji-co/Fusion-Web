// Libraries
import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import ExhibitionModel from "./models/ExhibitionModel";
// Styles
import "./style.css";

type ExhibitionProps = ExhibitionModel & HTMLAttributes<HTMLElement>;

const Exhibitions: React.FC = () => (
  <div className="exhibitions">
    <h1>Exhibitions</h1>
    <Link to="/">Home</Link>
    <br />
    <Link to="/profile">Profile</Link>
    <br />
    <Link to="/exhibitions/host">Host</Link>
    <br />
  </div>
);

export default Exhibitions;
