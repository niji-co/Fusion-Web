import { Link } from "react-router-dom";

function Profile() {
	return (
		<div className="profile">
			<h1>Profile</h1>
			<Link to="/">Home</Link><br />
			<Link to="/">Sign Out</Link><br />
			<Link to="/exhibitions">Exhibitions</Link>
		</div>
	);
}

export default Profile;