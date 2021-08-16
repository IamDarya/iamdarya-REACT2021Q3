import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, useParams } from "react-router-dom";
import { About } from "./about/about";
import { App } from "./app";
import { Posts } from "./articles/posts";
import { Details } from "./details/details";
import { ErrorPage } from "./error-page/error-page";
import "./style.scss";
import { AnimatedSwitch } from 'react-router-transition';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1
      }}
      className="switch-wrapper"
    >
      {/* <Switch> */}
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
        <Route
       path="/details/:id"
        component={Details}
      />
        <Route component={ErrorPage}/>
      {/* </Switch> */}
      </AnimatedSwitch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
