import React, { ReactElement } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home";

import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import ForgotPassword from "pages/ForgotPassword";
import Profile from "pages/Profile";

import Exhibition from "pages/Exhibition";
import HostExhibition from "pages/Exhibition/Host";

import Project from "pages/Project";

const AppRoutes = (): ReactElement => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/profile/:username" component={Profile} />

      <Route exact path="/exhibition" component={Exhibition} />
      <Route path="/exhibition/host" component={HostExhibition} />

      <Route exact path="/project/:title" component={Project} />
    </Switch>
  </HashRouter>
);

export default AppRoutes;
