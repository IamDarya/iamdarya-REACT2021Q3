import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Posts } from "./articles/posts";
// import { UsersList } from "./card/users-list";
import { SearchBar } from "./search-bar/search-bar";
// import { users } from "./articles/users-database";

// const navData = [
//   {
//   Component: <SearchBar />,
//   path: '/',
// },
// {
//   Component: <Posts />,
//   path: '/posts',
// }]

export function App(): JSX.Element {
  return (
    <div className="App">
      <SearchBar />
      {/* <Posts articles={articles}/> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {navData.map(({Component, path}): JSX.Element => {
            return(
              <Route path={path} exact key={path.toString()}>
                {Component}
                </Route>
            );
          })}
          <Redirect to='/' />
        </Switch>
      </Suspense> */}
    </div>
  );
}
