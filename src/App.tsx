import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// Styles
import "./App.css";
// Pages
import Home from "./pages/Home";

// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import ForgotPassword from "./pages/ForgotPassword";
// import Profile from "./pages/Profile";

// import Exhibitions from "./pages/Exhibitions";
// import HostExhibition from "./pages/Exhibitions/Host";

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      {/* <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/profile" component={Profile} />

      <Route path="/exhibitions" component={Exhibitions} exact />
      <Route path="/exhibitions/host" component={HostExhibition} /> */}
    </Switch>
  </HashRouter>
);

export default App;
