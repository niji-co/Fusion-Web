// Libraries
import { Link } from "react-router-dom";
// Styles
import "./style.css";

function Exhibitions() {
	return (
		<div className="exhbitions">
			<h1>Exhibitions</h1>
			<Link to="/">Home</Link><br />
			<Link to="/profile">Profile</Link><br />
			<Link to="/exhibitions/host">Host</Link><br />
		</div>
	);
}

export default Exhibitions;