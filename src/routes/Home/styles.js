import { css } from '@emotion/core';
import { flex, flexGrow } from '../../styles/misc';

export const mainContent = css`
  ${flexGrow};
  margin: 0 auto 30px;
  max-width: 935px;
  width: 100%;
  @media (min-width: 736px) {
    box-sizing: content-box;
    padding: 60px 20px 0;
    width: calc(100% - 40px);
  }
`;

export const tabHeader = css`
  border-top: 1px solid #efefef;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;

  a {
    border-top: 1px solid #262626;
    color: #14171a;
    ${flex};
    flex-direction: row;
    height: 52px;
    justify-content: center;
    text-transform: uppercase;
  }
`;

export const tabLabel = css`
  ${flex};
  align-items: center;
`;
