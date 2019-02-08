import { css } from '@emotion/core';
import { grey } from '../../styles/colors';
import { width100 } from '../../styles/misc';

export const footerStyle = css`
  order: 2;
  padding: 0 20px;
`;

export const contentStyle = css`
  ${width100};
  max-width: 935px;
  font-size: 12px;
  font-weight: 600;
  margin: 0 auto;
  padding: 38px 0;
  border-top: 1px solid ${grey};
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
