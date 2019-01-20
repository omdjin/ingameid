import { css } from '@emotion/core';
import { flex, justifyCenter, whiteBg } from '../../styles/misc';
import logoImg from './assets/logo.png';

export const headerClass = css`
  order: 0;
  position: fixed;
  z-index: 1;
  ${whiteBg};
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  ${flex};
  align-items: center;
  ${justifyCenter};
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const headerWrapper = css`
  height: 52px;
  padding: 0 20px;
  ${justifyCenter};
  flex-direction: row;
  max-width: 1010px;
  width: 100%;
  align-items: center;

  .header_logo-container {
    flex: 1 9999 0%;
    min-width: 40px;

    .header_logo {
      flex: 0 0 auto;
      justify-content: flex-start;
      flex-direction: row;

      .header_brand-logo {
        background-image: url(${logoImg});
        background-repeat: no-repeat;
        background-size: cover;
        height: 24px;
        width: 24px;
      }
      .header_sparator {
        background-color: #262626;
        height: 28px;
        margin: 0 16px;
        width: 1px;
      }

      .header_brand-label {
        margin-top: 4px;
        font-weight: 700;
        color: #14171a;
      }
    }
  }
`;
