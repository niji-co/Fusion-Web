// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./style.css";

const ForgotPassword: React.FC = () => (
  <div className="forgot-password">
    <h1>Forgot password</h1>
    <Link to="/">Home</Link>
  </div>
);

export default ForgotPassword;
