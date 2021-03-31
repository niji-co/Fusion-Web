import { Link } from "react-router-dom";

function ForgotPassword() {
	return (
		<div className="forgot-password">
			<h1>Forgot password</h1>
			<Link to="/">Home</Link>
		</div>
	);
}

export default ForgotPassword;