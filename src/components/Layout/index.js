import { node } from 'prop-types';
/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import { globalStyles, layoutClass } from './styles';

const Layout = ({ children }) => (
  <section css={layoutClass}>
    <Global styles={globalStyles} />
    {children}
  </section>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
