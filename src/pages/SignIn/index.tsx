import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const SignIn = (): ReactElement => (
  <div className="signin">
    <h1>Sign In</h1>
    <Link to="/">Home</Link>
    <br />
    <Link to="/forgot">Forgot password?</Link>
    <br />
    <Link to="/signup">Create account</Link>
  </div>
);

export default SignIn;
