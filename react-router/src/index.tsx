import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { About } from "./about/about";
import { App } from "./app";
// import reportWebVitals from './reportWebVitals';
import "./style.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route
        exact
        path='/'
        component={App}
      />
      <Route
        exact
        path='/about'
        component={About}
      />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
