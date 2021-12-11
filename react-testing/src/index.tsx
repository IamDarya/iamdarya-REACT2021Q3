import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { About } from "./about/about";
import { App } from "./app";
import { Details } from "./details/details";
import { ErrorPage } from "./error-page/error-page";
import { store } from "./store";
import "./style.scss";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route path="/details/:id/:date" component={Details} />
          <Route component={ErrorPage} />
        </AnimatedSwitch>
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
