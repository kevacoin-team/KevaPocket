import React from "react";
import { HashRouter, Switch } from "react-router-dom";

export const RouterFragment: React.FC = ({ children }) => {
  return (
    <HashRouter>
      <Switch>{children}</Switch>
    </HashRouter>
  );
};
