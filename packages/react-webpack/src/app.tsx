import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components

import Links from "./components/links";
import Start from "./components/start";
import Guide from "./components/guide";
import How from "./components/how";

export default function App() {
  return (
    <Router>
      <div>
        <Links />

        <div className="page main">
          <Route path="/start" component={Start} />
          <Route path="/how" component={How} />
          <Route path="/guide" component={Guide} />
        </div>
      </div>
    </Router>
  );
}


