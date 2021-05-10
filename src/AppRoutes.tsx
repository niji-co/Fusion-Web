import React, { ReactElement } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";

import Exhibitions from "./pages/Exhibitions";
import HostExhibition from "./pages/Exhibitions/Host";

import Project from "./pages/Project";

const AppRoutes = (): ReactElement => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/profile" component={Profile} />

      <Route exact path="/exhibitions" component={Exhibitions} />
      <Route path="/exhibitions/host" component={HostExhibition} />

      <Route exact path="/project/:title" component={Project} />
    </Switch>
  </HashRouter>
);

export default AppRoutes;
