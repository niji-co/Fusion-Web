// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./style.css";

function SignUp() {
	return (
		<div className="signup">
			<h1>Sign Up</h1>
			<Link to="/">Home</Link><br />
			<Link to="/signin">Already have an account?</Link>
		</div>
	);
}

export default SignUp;