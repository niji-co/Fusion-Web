import { Link } from "react-router-dom";

function SignIn() {
	return (
		<div className='signin'>
			<h1>Sign In</h1>
			<Link to="/signup">Create account</Link>
		</div>
	);
}

export default SignIn;