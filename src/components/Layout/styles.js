import { css } from '@emotion/core';
import { flex, flexGrow } from '../../styles/misc';
import { blackPrimary, greenPrimary, whiteSecondary } from '../../styles/colors';

export const layoutClass = css`
  ${flex};
  flex-direction: column;
  ${flexGrow};
  background-color: ${whiteSecondary};
  color: ${blackPrimary};
  min-height: 100vh;

  main {
    padding-top: 60px;
    order: 1;
    ${flexGrow};
  }
`;

export const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  a,
  a:visited {
    color: ${greenPrimary};
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }
  article,
  div,
  footer {
    align-items: stretch;
    border: 0 solid #000;
    box-sizing: border-box;
    ${flex};
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
  }
`;
