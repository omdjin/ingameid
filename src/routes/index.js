import React from "react";
import { object } from "prop-types";
import { Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeComponent from "./Home";
import ProductContainer from "./Product";

const Routes = ({ history, location, match }) => (
  <Layout>
    <main>
      <Switch>
        <Route path="/:slug" component={ProductContainer} />
        <Route exact path="/" component={HomeComponent} />
      </Switch>
    </main>
    <Header {...{ history, location, match }} />
    <Footer />
  </Layout>
);

Routes.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
  match: object.isRequired
};

const RootRoutes = () => <Route component={Routes} />;

export default RootRoutes;
