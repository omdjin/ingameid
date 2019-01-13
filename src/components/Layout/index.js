import { node } from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import layoutClass from "./styles";

const Layout = ({ children }) => (
  <section css={layoutClass}>{children}</section>
);

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;
