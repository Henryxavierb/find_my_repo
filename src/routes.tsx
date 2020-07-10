import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import ListRepositories from "./pages/ListRepositories";

const Routes: React.FC = () => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/repositories",
      component: ListRepositories,
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}
        <Route render={() => <Redirect exact to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
