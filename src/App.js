import { Route, Switch } from "react-router-dom";
// Styles
import "./App.css";
// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
	return (
		<div className="app">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot" component={ForgotPassword} />
      </Switch>
		</div>
	);
}

export default App;
