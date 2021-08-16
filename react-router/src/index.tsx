import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { About } from "./about/about";
import { App } from "./app";
import { ErrorPage } from "./error-page/error-page";
// import reportWebVitals from './reportWebVitals';
import "./style.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
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
        <Route component={ErrorPage}/>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
