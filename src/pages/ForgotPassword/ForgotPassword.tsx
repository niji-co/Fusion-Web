// Libraries
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
// Styles
import "./style.css";

const ForgotPassword = (): ReactElement => (
  <div className="forgot-password">
    <h1>Forgot password</h1>
    <Link to="/">Home</Link>
  </div>
);

export default ForgotPassword;
