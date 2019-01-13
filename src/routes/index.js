import React from "react";
import { object } from "prop-types";
import { Route, Switch } from "react-router-dom";

import HomeComponent from "./Home";
import ProductContainer from "./Product";

const Routes = ({ history, location, match }) => (
  <div>
    <segment>Header</segment>
    <Switch>
      <Route path="/:slug" component={ProductContainer} />
      <Route exact path="/" component={HomeComponent} />
    </Switch>
    <segment>Footer</segment>
  </div>
);

Routes.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
  match: object.isRequired
};

const RootRoutes = () => <Route component={Routes} />;

export default RootRoutes;
