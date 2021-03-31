import { Route, Switch } from "react-router-dom";
// Styles
import "./App.css";
// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Exhibitions from "./pages/Exhibitions";
import HostExhibition from "./pages/HostExhibition";

function App() {
	return (
		<div className="app">
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/profile" component={Profile} />

        <Route path="/exhibitions" component={Exhibitions} exact />
        <Route path="/exhibitions/host" component={HostExhibition} />
      </Switch>
		</div>
	);
}

export default App;
