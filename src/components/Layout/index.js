import React from "react";
import { node } from "prop-types";
import "./styles.css";

const Layout = ({ children }) => (
  <section className="layout">{children}</section>
);

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;
