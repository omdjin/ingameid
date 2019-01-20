import { css } from '@emotion/core';

export const footerStyle = css`
  order: 2;
  padding: 0 20px;
`;

export const contentStyle = css`
  max-width: 935px;
  font-size: 12px;
  font-weight: 600;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 876px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 38px 0;
  }
  nav {
    text-transform: uppercase;
  }
  span {
    text-transform: unset;
    color: #999;
  }
`;

export default footerStyle;
