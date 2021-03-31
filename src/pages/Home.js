import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home">
			<h1>Home</h1>
			<Link to="/signin">Sign in</Link><br />
			<Link to="/signup">Sign up</Link><br />
			<Link to="/profile">Profile</Link><br />
			<Link to="/exhibitions">Exhibitions</Link>
		</div>
	);
}

export default Home;