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
  padding: 38px 0;
  border-top: 1px solid #efefef;
  @media (min-width: 876px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  nav {
    text-transform: uppercase;
  }
  span {
    text-transform: unset;
    color: #4f4f4f;
  }
`;

export default footerStyle;
